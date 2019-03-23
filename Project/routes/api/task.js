const express = require('express');
const router = express.Router();
const Task = require('../../models/Task.js');
// Get all task 
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json({ data: tasks })
});

module.exports = router;
