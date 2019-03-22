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
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update a member's name
router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newMember = await Member.create(req.body)
     res.json({msg:'Member was created successfully', data: newMember})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// delete a certain member
router.delete('/api/members/:id', (req, res) => {
    const memberID = req.params.id 
    const member = members.find(member => member.id === memberID)
    const index = memebrs.indexOf(member)
    members.splice(index,1)
    res.send(members)
});

module.exports = router;
