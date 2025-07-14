const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    coordinatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coordinator' },
    name: String,
    email: String,
    weddingDate: Date,
    guestNumber: Number,
});

module.exports = mongoose.model('Booking', BookingSchema);
