const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');

router.post('/', contactFormController.createContactForm);
router.get('/', contactFormController.getAllContactForms);
router.get('/:id', contactFormController.getContactFormById); // Changed from ID to UUID
router.delete('/:id', contactFormController.deleteContactForm); // Ensure `deleteContactForm` uses `uuid`

module.exports = router;
