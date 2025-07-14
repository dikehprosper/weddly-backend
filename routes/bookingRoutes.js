// Import Express framework
const express = require('express');

// Import the Booking model (MongoDB schema)
const Booking = require('../models/Booking');

// Create an Express Router instance
const router = express.Router();

/**
 * @route   POST /
 * @desc    Create a new booking
 * @access  Public
 */
router.post('/', async (req, res) => {
    try {
        // Create a new booking instance from request body
        const booking = new Booking(req.body);

        // Save the booking to the database
        await booking.save();

        // Send a success response with the created booking
        res.status(201).json({
            message: 'Booking successful',
            booking,
        });
    } catch (error) {
        // Log any errors to the server console for debugging
        console.error('Error creating booking:', error.message);

        // Send an error response to the client
        res.status(500).json({
            message: 'Failed to create booking. Please try again later.',
            error: error.message, // Optional: remove in production
        });
    }
});

// Exports the router to be used in server.js
module.exports = router;
