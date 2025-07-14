const mongoose = require('mongoose');

const CoordinatorSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: Number,
    profilePhoto: String,
    bio: String,
    unavailableDates: [Date],
});

module.exports = mongoose.model('Coordinator', CoordinatorSchema);
