const express = require('express');
const router = express.Router();
const Schedule = require('../../models/Schedule.js');
// Get all schedules
router.get('/', async (req, res) => {
    const schedules = await Schedule.find();
    res.json({ data: schedules })
});

// Create a new member
router.post('/', async (req,res) => {
    try {
        
    const newSchedule = await Schedule.create(req.body)
     res.json({msg:'Schedule was created successfully', data: newSchedule})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update a Schedule
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const schedule = await Schedule.find({id})
    const updatedSchedule = await Schedule.updateOne(req.body)
     res.json({msg: 'Schedule updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


module.exports = router;const express = require('express');
const router = express.Router();
const Schedule = require('../../models/Schedule.js');
// Get all schedules
router.get('/', async (req, res) => {
    const schedules = await Schedule.find();
    res.json({ data: schedules })
});

// Create a new member
router.post('/', async (req,res) => {
    try {
        
    const newSchedule = await Schedule.create(req.body)
     res.json({msg:'Schedule was created successfully', data: newSchedule})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update a Schedule
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const schedule = await Schedule.find({id})
    const updatedSchedule = await Schedule.updateOne(req.body)
     res.json({msg: 'Schedule updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


module.exports = router;