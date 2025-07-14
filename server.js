const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const coordinatorRoutes = require('./routes/coordinatorRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/coordinators', coordinatorRoutes);
app.use('/api/bookings', bookingRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
