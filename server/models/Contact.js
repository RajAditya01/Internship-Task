const mongoose = require('mongoose');

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
