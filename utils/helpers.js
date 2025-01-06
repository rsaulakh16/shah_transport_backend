const jwt = require('jsonwebtoken');

exports.generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

exports.generateAuthToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '2h' });

exports.convertToDateFormat = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0'); // Ensures 2 digits for day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

