/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
// Import Express framework
const express = require('express');

// Import the Booking model (MongoDB schema)
const Booking = require('../models/Booking');
// Import the Coordinator model
const Coordinator = require('../models/Coordinator');

// Create an Express Router instance
const router = express.Router();

/**
 * @route   POST /
 * @desc    Creates a new booking for a wedding coordinator
 * @access  Public
 * 
 * This endpoint receives booking details including coordinator ID, client name, email,
 * wedding date, and guestnumber. It validates the input, checks for conflicts (double bookings),
 * and creates a new booking document in the database if all validations pass.
 */
router.post('/', async (req, res) => {
    try {
        const { coordinatorId, name, email, weddingDate, guestNumber } = req.body;

        // Validate required fields presence
        if (!coordinatorId || !name || !email || !weddingDate || !guestNumber) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Validate email format using simple regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format.' });
        }

        // Validate guestNumber: must be a positive number
        if (typeof guestNumber !== 'number' || guestNumber <= 0) {
            return res.status(400).json({ message: 'Guest number must be a positive number.' });
        }

        // Validate weddingDate format and range
        const weddingDateObj = new Date(weddingDate);
        const now = new Date();

        if (isNaN(weddingDateObj.getTime())) {
            return res.status(400).json({ message: 'Invalid wedding date format.' });
        }

        // Normalize weddingDate and current date to midnight for accurate comparison
        const weddingDateMidnight = new Date(weddingDateObj);
        weddingDateMidnight.setHours(0, 0, 0, 0);

        const todayMidnight = new Date(now);
        todayMidnight.setHours(0, 0, 0, 0);

        // Block booking for dates that are today or in the past
        if (weddingDateMidnight <= todayMidnight) {
            return res.status(400).json({ message: 'Wedding date cannot be today or in the past.' });
        }

        // Check if the coordinator is already booked on the selected wedding date
        const existingBooking = await Booking.findOne({
            coordinatorId,
            weddingDate: weddingDateMidnight, // stores normalized date for consistency
        });

        if (existingBooking) {
            return res.status(400).json({ message: 'Coordinator is already booked on the selected date.' });
        }

        // Create and save the new booking document
        const booking = new Booking({
            coordinatorId,
            name,
            email,
            weddingDate: weddingDateMidnight,
            guestNumber,
        });

        await booking.save();

        // Update coordinator's unavailableDates after successful booking
        await Coordinator.findByIdAndUpdate(
            coordinatorId,
            { $addToSet: { unavailableDates: weddingDateMidnight } } // prevent duplicate entries
        );

        // Log booking info for debugging/monitoring
        console.log('New booking created:', booking);

        // Send success response with created booking details
        return res.status(201).json({ message: 'Booking successful', booking });

    } catch (error) {
        // Log any unexpected server errors
        console.error('Booking error:', error.message);

        // Return generic server error message to client
        return res.status(500).json({ message: 'Server error. Try again later.', error: error.message });
    }
});

// Exports the router instance to be used by the main server file
module.exports = router;
