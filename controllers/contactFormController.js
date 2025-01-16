const { ContactForm } = require('../models');

// Create a new contact form entry
exports.createContactForm = async (req, res) => {
  try {
    const { subject, name, email, phone, message } = req.body;

    if (!subject || !name || !email || !message) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    const newContactForm = await ContactForm.create({
      subject,
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(newContactForm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create contact form' });
  }
};

// Get all contact form entries
exports.getAllContactForms = async (req, res) => {
  try {
    const contactForms = await ContactForm.findAll();
    res.status(200).json({
      message: 'Contact forms fetched successfully',
      data: contactForms,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve contact forms' });
  }
};

exports.getContactFormById = async (req, res) => {
    try {
      const { uuid } = req.params;
  
      const contactForm = await ContactForm.findOne({ where: { uuid } });
  
      if (!contactForm) {
        return res.status(404).json({ error: 'Contact form not found' });
      }
  
      res.status(200).json(contactForm);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve contact form' });
    }
  };
  
// Delete a contact form entry
exports.deleteContactForm = async (req, res) => {
  try {
    const { id } = req.params;

    const contactForm = await ContactForm.findByPk(id);

    if (!contactForm) {
      return res.status(404).json({ error: 'Contact form not found' });
    }

    await contactForm.destroy();

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete contact form' });
  }
};
