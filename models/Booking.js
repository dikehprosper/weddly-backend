const mongoose = require('mongoose');

// Booking Schema for wedding coordinator bookings
const BookingSchema = new mongoose.Schema({
    // Reference to the coordinator being booked
    coordinatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coordinator' },

    // Name of the person making the booking
    name: { type: String, required: true },

    // Contact email of the client
    email: { type: String, required: true },

    // Date of the wedding
    weddingDate: { type: Date, required: true },

    // Number of guests attending the wedding
    guestNumber: { type: Number, required: true },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt timestamps
});

// Exports the Booking model
module.exports = mongoose.model('Booking', BookingSchema);
