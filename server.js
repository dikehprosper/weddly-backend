// Import Core Packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load Environment Variables
dotenv.config(); // Automatically loads variables from .env file into process.env

// Import Route Handlers
const coordinatorRoutes = require('./routes/coordinatorRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Initialize Express App
const app = express();

// Middleware Setup

// Enable Cross-Origin Resource Sharing (CORS) for all requests
app.use(cors());

// Enable parsing of JSON payloads in incoming requests
app.use(express.json());


// Health Check Endpoint

// Simple endpoint to verify server status
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running smoothly' });
});

// API Routes

// Handles all coordinator-related API requests
app.use('/api/coordinators', coordinatorRoutes);

// Handles all booking-related API requests
app.use('/api/bookings', bookingRoutes);

// Database Connection Setup

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection failed:', err));

// Start the Express Server

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
