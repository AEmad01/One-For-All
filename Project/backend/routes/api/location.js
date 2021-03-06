const express = require('express');
const router = express.Router();
const Location = require('../../models/location.js');
const validator = require('../../validations/locationValidations.js');
// Get all locations
router.get('/', async (req, res) => {
    const location = await Location.find();
    res.json({ data: location })
    }
,);
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
     res.json({msg: 'location updated successfully'})
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
