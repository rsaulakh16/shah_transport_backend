const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();
const BREVO_API = process.env.BREVO_API;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;

if (!BREVO_API || !BREVO_SENDER_EMAIL) {
  console.error('Missing BREVO_API or BREVO_SENDER_EMAIL environment variable.');
  process.exit(1); // Exit if critical variables are missing
}

exports.sendEmail = async ({ to, subject, htmlContent }) => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { email: BREVO_SENDER_EMAIL, name: 'Shah Transport' },
        to: [{ email: to }],
        subject,
        htmlContent,
      },
      {
        headers: {
          'api-key': BREVO_API,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Failed to send email via Brevo:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to send email.');
  }
};
