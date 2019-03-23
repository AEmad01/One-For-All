const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Member = require('../../models/Member.js');
const validator = require('../../validations/memberValidations')
// Get all members
router.get('/', async (req, res) => {
    const members = await Member.find();
    res.json({ data: members })
});

// Create a new member
router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newMember = await Member.create(req.body)
     res.json({msg:'Member was created successfully', data: newMember})
    }
    catch(error) {
        console.log(error)
    }  
 })
// Update a member
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const member = await Member.find({id})
     if(!member) return res.status(404).send({error: 'Member does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedMember = await Member.updateOne(req.body)
     res.json({msg: 'Member updated successfully'})
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
     const member = await Member.find({id})
     const mem = member._id
     const deletedMember = await Member.findOneAndDelete(mem)
     res.json({msg:'Book was deleted successfully', data: deletedMember})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;
