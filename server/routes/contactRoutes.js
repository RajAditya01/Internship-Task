const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const validateContactFormInput = require('../middlewares/validateContactFormInput');

// Submit contact form
router.post('/contact', validateContactFormInput, contactController.submitContactForm);

module.exports = router;
