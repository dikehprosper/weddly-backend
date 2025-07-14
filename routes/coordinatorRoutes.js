const express = require('express');
const Coordinator = require('../models/Coordinator');
const router = express.Router();

router.get('/', async (req, res) => {
    const coordinators = await Coordinator.find();
    res.json(coordinators);
});

router.get('/:id', async (req, res) => {
    const coordinator = await Coordinator.findById(req.params.id);
    res.json(coordinator);
});

module.exports = router;
