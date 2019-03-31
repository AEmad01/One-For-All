const express = require('express');
const Joi = require('joi');
const router = express.Router();
const admin = require("../../models/Admin.js");
const validator = require('../../validations/adminValidations');

// Get all Admins
router.get("/", async (req, res) => {
    const admin1 = await admin.find();
    res.json({ data: admin1 });
  })
// create new admin(temp)
  router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newadmin = await admin.create(req.body)
     res.json({msg:'admin was created successfully', data: newadmin})
    }
    catch(error) {
        console.log(error)
    }  
 })
 //update an admin
 router.put('/updateAdmin:/id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Book.findOne({id})
     if(!admin) return res.status(404).send({error: 'admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updateAdmin = await admin.updateOne(req.body)
     res.json({msg: 'admin updated successfully'})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 });
//delete an admin 
router.delete('/deleteAdmin/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deleteAdmin = await admin.findByIdAndRemove(id)
     res.json({msg:'admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 });

module.exports = router;