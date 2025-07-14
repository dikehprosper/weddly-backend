const mongoose = require('mongoose');

// Coordinator Schema for wedding coordinators listed on the platform
const CoordinatorSchema = new mongoose.Schema({
    // Full name of the coordinator
    name: { type: String, required: true },

    // Location where the coordinator operates (city, state, country)
    location: { type: String, required: true },

    // Service price or rate charged by the coordinator
    price: { type: Number, required: true },

    // Profile photo URL of the coordinator
    profilePhoto: { type: String, required: true },

    // Brief biography or description of the coordinator
    bio: { type: String, required: true },

    // Average rating based on customer feedback (0 to 5)
    rating: { type: Number, default: 5 },

    // Total number of reviews received
    reviews: { type: Number, default: 0 },

    // Years of experience (can be shown as text or number of years)
    experience: { type: String, required: true },

    // Wedding type specialization (e.g., "Luxury weddings", "Traditional weddings")
    specialty: { type: String, required: true },

    // Languages spoken by the coordinator
    languages: { type: [String], default: [] },

    // Dates when the coordinator is unavailable for bookings
    unavailableDates: { type: [Date], default: [] },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Exporta the Coordinator model
module.exports = mongoose.model('Coordinator', CoordinatorSchema);
