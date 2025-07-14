// Import Express framework
const express = require('express');

// Import Coordinator model (MongoDB schema)
const Coordinator = require('../models/Coordinator');

// Initialize Express Router
const router = express.Router();

/**
 * @route   GET /
 * @desc    Fetch all wedding coordinators
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
    // Fetch all coordinators from the database
        const coordinators = await Coordinator.find();

        // Send successful response with coordinator data
        res.status(200).json(coordinators);
    } catch (error) {
        // Log error to server console for debugging
        console.error('Error fetching coordinators:', error.message);

        // Send error response to client
        res.status(500).json({
            message: 'Failed to fetch coordinators. Please try again later.',
        });
    }
});

/**
 * @route   GET /:id
 * @desc    Fetch a single coordinator by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
    try {
    // Fetch coordinator by unique ID from request parameters
        const coordinator = await Coordinator.findById(req.params.id);

        // If coordinator not found, return 404
        if (!coordinator) {
            return res.status(404).json({
                message: 'Coordinator not found.',
            });
        }

        // Send successful response with specific coordinator data
        res.status(200).json(coordinator);
    } catch (error) {
        // Log error details to console
        console.error('Error fetching coordinator:', error.message);

        // Send error response to client
        res.status(500).json({
            message: 'Failed to fetch coordinator. Please try again later.',
        });
    }
});

// Exports the router module for use in main server file
module.exports = router;
