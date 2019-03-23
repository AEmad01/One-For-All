const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Member = require('../../models/Member.js');
const Lifecoach = require('../../models/Lifecoach.js');
const Location = require('../../models/Location.js');
const validator = require('../../validations/locationValidations.js')

// Get all locations
router.get('/', async (req, res) => {
    const location = await location.find();
    res.json({ data: locations })
});

// Get a certain location using mongo
router.get('/:id',async (req, res) => {
    const locationId = req.params.id
    const location = await Schedule.findById(locationId)  
    if(!location) return res.status(400).send({error:result.error.details[0].message});
    res.send(location)
})


// Create a new location
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newlocation = await Location.create(req.body)
     res.json({msg:'locaiton was created successfully', data: newlocation})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update a location
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const location = await Location.find({id})
     if(!location) return res.status(404).send({error: 'location does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedlocation = await Location.updateOne(req.body)
     res.json({msg: 'location updated successfully',data: updatedlocation})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// delete a certain location
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const location = await Location.find({id})
     const loc = location._id
     const deletedlocation = await Location.findOneAndDelete(loc)
     res.json({msg:'location was deleted successfully', data: deletedlocation})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;
