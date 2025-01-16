const express = require('express');
const driverController = require('../controllers/driverController');

const router = express.Router();

router.get('/', driverController.getDrivers);
router.post('/send-otp', driverController.sendOtp);
router.post('/verify-otp', driverController.verifyOtp);
router.post('/driver-details', driverController.saveDriverDetails);
router.post('/employment-history', driverController.saveEmploymentHistory);
router.post('/emergency-contact', driverController.saveEmergencyContacts);
router.post('/interview-questions', driverController.saveQuestions);
router.post('/submit-form', driverController.submitForm);

module.exports = router;
