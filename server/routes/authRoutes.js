const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validateRegisterInput = require('../middlewares/validateRegisterInput');
const validateLoginInput = require('../middlewares/validateLoginInput');

// Register a new user
router.post('/register', validateRegisterInput, authController.register);

// Login user
router.post('/login', validateLoginInput, authController.login);

module.exports = router;
