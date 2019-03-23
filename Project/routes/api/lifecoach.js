const express = require('express');
const router = express.Router();
const Lifecoach = require('../../models/lifecoach.js');
const validator = require('../../validations/lifecoachValidations.js')
// Get all life coaches
router.get('/', async (req, res) => {
    const lifecoachs = await Lifecoach.find();
    res.json({ data: lifecoachs })
});

// Create a new lifecoach
router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newlifecoach = await Lifecoach.create(req.body)
     res.json({msg:'life coach was created successfully', data: newlifecoach})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update a lifecoach
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const lifecoach = await Lifecoach.find({id})
     if(!lifecoach) return res.status(404).send({error: 'life coach does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedlifecoach = await Lifecoach.updateOne(req.body)
     res.json({msg: 'life coach updated successfully',data: updatedlifecoach})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// delete a certain member
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const lifecoach = await Lifecoach.find({id})
     const life = lifecoach._id
     const deletedlifecoach = await Lifecoach.findOneAndDelete(life)
     res.json({msg:'life coach was deleted successfully', data: deletedlifecoach})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;
