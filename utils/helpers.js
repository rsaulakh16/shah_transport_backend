const jwt = require('jsonwebtoken');

exports.generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.generateAuthToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
