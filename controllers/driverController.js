const { Driver, DriverDetails } = require('../models');
const { generateOtp, generateAuthToken } = require('../utils/helpers');
const { sendEmail } = require('../services/brevoService');
const jwt = require('jsonwebtoken');

// 1. Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

    // Save or update Driver record
    const [driver] = await Driver.findOrCreate({
      where: { email },
      defaults: { otp, otp_expires_at: otpExpiry, email_verified: false },
    });

    if (!driver.isNewRecord) {
      await driver.update({ otp, otp_expires_at: otpExpiry });
    }

    // Send OTP via Brevo
    await sendEmail({
      to: email,
      subject: 'Your OTP Code',
      htmlContent: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 10 minutes.</p>`,
    });

    res.json({ message: 'OTP sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send OTP.' });
  }
};

// 2. Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required.' });
  }

  try {
    const driver = await Driver.findOne({ where: { email } });

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found.' });
    }

    if (driver.otp !== otp || driver.otp_expires_at < new Date()) {
      return res.status(400).json({ message: 'Invalid or expired OTP.' });
    }

    await driver.update({ email_verified: true, otp: null, otp_expires_at: null });

    const authToken = generateAuthToken(driver.id);
    res.json({ authToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to verify OTP.' });
  }
};

// 3. Save Driver Details
exports.saveDriverDetails = async (req, res) => {
  const { authToken, driverDetails } = req.body;

  if (!authToken) {
    return res.status(401).json({ message: 'Authentication token is required.' });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    const driverId = decoded.id;

    const driver = await Driver.findByPk(driverId);

    if (!driver) {
      return res.status(404).json({ message: 'Driver not found.' });
    }

    if (!driver.email_verified) {
      return res.status(403).json({ message: 'Email not verified.' });
    }

    const savedDetails = await DriverDetails.create({
      driverId,
      ...driverDetails,
    });

    res.json({ message: 'Details saved successfully.', savedDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save details.' });
  }
};
