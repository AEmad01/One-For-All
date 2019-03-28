const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Schedule = require('../../models/Schedule.js');
const validator = require('../../validations/scheduleValidations')
// Get all schedules
router.get('/', async (req, res) => {
    const schedules = await Schedule.find();
    res.json({ data: schedules })
});

// Get a certain partner using mongo
router.get('/:id',async (req, res) => {
    const schdeuleId = req.params.id
    const schedule = await Schedule.findById(schdeuleId)  
    if(!schedule) return res.status(400).send({error:result.error.details[0].message});
    res.send(schedule)
})

// Create a new schedule
router.post('/', async (req,res) => {
    try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })    
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
     if(!schedule) return res.status(404).send({error: 'Schedule does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const updatedSchedule = await Schedule.updateOne(req.body)
     res.json({msg: 'Schedule updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


 router.delete('/:id',async (req, res) => {
    const schdeuleId = req.params.id
    const schedule = await Schedule.findByIdAndDelete(schdeuleId)  
    if(!schedule) return res.status(400).send({error:result.error.details[0].message});
    /*const index = partners.indexOf(partner)
    
    schedules.splice(index,1)*/
    
    res.send({msg:"done"})
})

module.exports = router;

