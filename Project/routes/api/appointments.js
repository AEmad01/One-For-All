const express = require('express');
const router = express.Router();
const appointment = require('../../models/appointment.js');
const validator = require('../../validations/appointmentValidation')
// Get all appointments
router.get('/', async (req, res) => {
    const appointments = await appointment.find();
    res.json({ data: appointments })
});

// Create a new appointment
router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAppointment = await appointment.create(req.body)
     res.json({msg:'Appointment was created successfully', data: newAppointment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
// Update an appointment
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const appointments = await appointment.find({id})
     if(!appointments) return res.status(404).send({error: 'Appointment does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAppointment = await appointment.updateOne(req.body)
     res.json({msg: 'Appointment updated successfully', date: updatedAppointment} )
}
    catch(error) {
        // We will be handling the error later
        console.log(error)
    } } )
// delete a certain appointment
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const appointments = await appointment.find({id})
     const appo = appointments._id
     const deletedAppointment = await appointment.findOneAndDelete(appo)
     res.json({msg:'Appointment was deleted successfully', data: deletedAppointment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;
