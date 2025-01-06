const {
  Driver,
  DriverDetails,
  EmploymentHistory,
  EmergencyContact,
  Questionnaire,
} = require("../models");
const { generateOtp, generateAuthToken } = require("../utils/helpers");
const { sendEmail } = require("../services/brevoService");
const jwt = require("jsonwebtoken");
const { formEmailTemplate } = require("../utils/formEmail");

// 1. Send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
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
      subject: "Your OTP Code",
      htmlContent: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 10 minutes.</p>`,
    });

    res.json({ message: "OTP sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send OTP." });
  }
};

// 1. update driver
exports.submitForm = async (req, res) => {
  const { authToken, data } = req.body;

  if (!authToken) {
    return res
      .status(401)
      .json({ message: "Authentication token is required." });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    const driverId = decoded.id;

    const driver = await Driver.findByPk(driverId);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }

    if (!driver.email_verified) {
      return res.status(403).json({ message: "Email not verified." });
    }

    let savedDetails = await driver.update({
      application_status: "DONE",
      agreedAllPolicies: true,
      isViewed: true,
    });
    sendDriverDetailsEmail(driverId);
    res.json({ message: "Form Submitted Successfuly", savedDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save details." });
  }
};

// 2. Verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required." });
  }

  try {
    const driver = await Driver.findOne({ where: { email } });

    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }

    if (driver.otp !== otp || driver.otp_expires_at < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP." });
    }

    await driver.update({
      email_verified: true,
      otp: null,
      otp_expires_at: null,
    });

    const authToken = generateAuthToken(driver.id);
    res.json({
      data: { driver, authToken },
      success: true,
      message: "Email Verified Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to verify OTP." });
  }
};

// 3. Save Driver Details
exports.saveDriverDetails = async (req, res) => {
  const { authToken, driverDetails } = req.body;

  if (!authToken) {
    return res
      .status(401)
      .json({ message: "Authentication token is required." });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    const driverId = decoded.id;

    const driver = await Driver.findByPk(driverId);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }

    if (!driver.email_verified) {
      return res.status(403).json({ message: "Email not verified." });
    }

    // Check if DriverDetails already exists for the driver
    const existingDetails = await DriverDetails.findOne({
      where: { driverId },
    });

    let savedDetails;
    if (existingDetails) {
      // Update existing record
      savedDetails = await existingDetails.update(driverDetails);
      await driver.update({ application_status: 0 });
      res.json({ message: "Details updated successfully.", savedDetails });
    } else {
      // Create new record
      savedDetails = await DriverDetails.create({
        driverId,
        ...driverDetails,
      });
      await driver.update({ application_status: 0 });
      res.json({ message: "Details saved successfully.", savedDetails });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save details." });
  }
};

// 4. Save Employment History
exports.saveEmploymentHistory = async (req, res) => {
  const { authToken, employmentHistory } = req.body;
  console.log("employmentHistory", employmentHistory);
  if (!authToken) {
    return res
      .status(401)
      .json({ message: "Authentication token is required." });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    const driverId = decoded.id;

    const driver = await Driver.findByPk(driverId);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }

    if (!driver.email_verified) {
      return res.status(403).json({ message: "Email not verified." });
    }

    // Check if DriverDetails already exists for the driver
    const existingDetails = await EmploymentHistory.findOne({
      where: { driverId },
    });

    let savedDetails;
    if (existingDetails) {
      // Update existing record
      savedDetails = await existingDetails.update(employmentHistory);
      await driver.update({ application_status: 1 });
      res.json({ message: "Details updated successfully.", savedDetails });
    } else {
      // Create new record
      savedDetails = await EmploymentHistory.create({
        driverId,
        employmentHistory,
      });
      await driver.update({ application_status: 0 });
      res.json({ message: "Details saved successfully.", savedDetails });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save details." + error });
  }
};
// 4. Save Employment History
exports.saveEmergencyContacts = async (req, res) => {
  const { authToken, emergencyContacts } = req.body;

  if (!authToken) {
    return res
      .status(401)
      .json({ message: "Authentication token is required." });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    const driverId = decoded.id;

    const driver = await Driver.findByPk(driverId);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }

    if (!driver.email_verified) {
      return res.status(403).json({ message: "Email not verified." });
    }

    // Check if DriverDetails already exists for the driver
    const existingDetails = await EmergencyContact.findOne({
      where: { driverId },
    });

    let savedDetails;
    if (existingDetails) {
      // Update existing record
      savedDetails = await existingDetails.update(emergencyContacts);
      await driver.update({ application_status: 0 });
      res.json({ message: "Details updated successfully.", savedDetails });
    } else {
      // Create new record
      savedDetails = await EmergencyContact.create({
        driverId,
        emergencyContacts,
      });
      await driver.update({ application_status: 2 });
      res.json({ message: "Details saved successfully.", savedDetails });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save details." });
  }
};

// 5. Driver questions Details
exports.saveQuestions = async (req, res) => {
  const { authToken, questions } = req.body;

  if (!authToken) {
    return res
      .status(401)
      .json({ message: "Authentication token is required." });
  }

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    const driverId = decoded.id;

    const driver = await Driver.findByPk(driverId);

    if (!driver) {
      return res.status(404).json({ message: "Driver not found." });
    }

    if (!driver.email_verified) {
      return res.status(403).json({ message: "Email not verified." });
    }

    // Check if DriverDetails already exists for the driver
    const existingDetails = await Questionnaire.findOne({
      where: { driverId },
    });

    let savedDetails;
    if (existingDetails) {
      // Update existing record
      savedDetails = await existingDetails.update(questions);
      await driver.update({ application_status: 3 });
      res.json({ message: "Details updated successfully.", savedDetails });
    } else {
      // Create new record
      savedDetails = await Questionnaire.create({
        driverId,
        questions,
      });
      await driver.update({ application_status: 0 });
      res.json({ message: "Details saved successfully.", savedDetails });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save details." });
  }
};

async function sendDriverDetailsEmail(driverId) {
  try {
    const driver = await Driver.findByPk(driverId);
    const personalDetails = await DriverDetails.findOne({
      where: { driverId },
    });

    const employmentHistory = await EmploymentHistory.findOne({
      where: { driverId },
    });
    const questions = await Questionnaire.findOne({
      where: { driverId },
    });
    const emergencyContact = await EmergencyContact.findOne({
      where: { driverId },
    });
    // Format the driver details into an HTML table
    // Send the email
    await sendEmail({
      to: "shahtransport@yopmail.com", // Send to admin or any other relevant email
      subject: "New Driver Details Submitted",
      htmlContent: await formEmailTemplate(
        driver,
        personalDetails,
        employmentHistory,
        emergencyContact,
        questions
      ),
    });

    console.log("Driver details email sent successfully.");
  } catch (error) {
    console.error("Failed to send email with driver details:", error);
  }
}
