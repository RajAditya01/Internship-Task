const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database connection

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// Import routes
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', contactRoutes);

// Basic route for testing server
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
