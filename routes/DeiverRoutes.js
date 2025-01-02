const express = require('express');
const driverController = require('../controllers/driverController');

const router = express.Router();

router.post('/send-otp', driverController.sendOtp);
router.post('/verify-otp', driverController.verifyOtp);
router.post('/driver-details', driverController.saveDriverDetails);

module.exports = router;
