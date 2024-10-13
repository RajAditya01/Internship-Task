const Contact = require('../models/Contact');

// Submit contact form
exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact form data in the database
    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
