const express = require('express');
const router = express.Router();
const appointment = require('../../models/appointment.js');
const validator = require('../../validations/appointmentValidation')
const lifecoach = require('../../models/lifecoach')
const member = require('../../models/Member')
// Get all appointments
router.get('/', async (req, res) => {
    const appointments = await appointment.find();
    res.json({ data: appointments })
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const appointments = await appointment.findById(id);
  res.json({ data: appointments })
});

// Create a new appointment

router.post('/createAppointment/:id/:mid', async (req,res) => {
    const id = req.params.id
    const mid = req.params.mid
    try {
    
    const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const lifecoachm = await lifecoach.findById(id);
     const namelife = lifecoachm.name
     const mem = await member.findById(mid);
     const memName = mem.name
     if(lifecoachm!== undefined && mem!==undefined){
        req.body.lifeCoachName = namelife
        req.body.memberName = memName
        req.body.lifeCoachID=id
        req.body.memberID=mid
     const newAppointment = await appointment.create(req.body)
     
     res.json({msg:'Appointment was created successfully', data: newAppointment})
     lifecoachm.Appointments.push(newAppointment);
     const temp = await lifecoachm.save();
     res.send(lifecoachm);
     }
    }
    catch(error) {  
        res.status(404).send({error: 'You need a LifeCoach to create an appointment'})
        console.log(error)
    }  
    
 });
 router.post('/createAppointmentlife/:id/:mid', async (req,res) => {
  const id = req.params.id
  const mid = req.params.mid
  try {
  
  const isValidated = validator.createValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const lifecoachm = await lifecoach.findById(id);
   const namelife = lifecoachm.name
   const lif = await lifecoach.findById(mid);
   const lifName = lif.name
   if(lifecoachm!== undefined && lif!==undefined){
      req.body.lifeCoachName = namelife
      req.body.memberName = lifName
      req.body.lifeCoachID=id
      req.body.memberID=mid
   const newAppointment = await appointment.create(req.body)
   
   res.json({msg:'Appointment was created successfully', data: newAppointment})
   lifecoachm.Appointments.push(newAppointment);
   const temp = await lifecoachm.save();
   res.send(lifecoachm);
   }
  }
  catch(error) {  
      res.status(404).send({error: 'You need a LifeCoach to create an appointment'})
      console.log(error)
  }  
  
});

    router.put("/:id", async (req, res) => {
        try {
          const id = req.params.id;
          const appointments = await appointment.find({id});
          if (!appointments) return res.status(404).send({ error: "appointments does not exist" });
          const isValidated = validator.updateValidation(req.body);
          if (isValidated.error)
            return res
              .status(400)
              .send({ error: isValidated.error.details[0].message });
          
          const updatedappointment = await appointment.findOneAndUpdate({_id: id} , req.body);
          res.json({ msg: "appointment updated successfully" });
        } catch (error) {
          // We will be handling the error later
          console.log(error);
        }
      });

// Update an appointment
router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        try {
        const picked = await appointment.findById(id);
        if (!picked)
          return res.status(404).send({ error: "appointment does not exist" });
          const isValidated = validator.updateValidation(req.body);
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message }) ;
      
          const updatedappointment = await picked.updateOne(req.body);
           res.json({msg:'appointment updated successfully', data: updatedappointment  })
        
          }
          catch(error) {
              res.status(404).send({error: 'Only appointment can be updated'})
              console.log(error)
        }
        
    
     }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    } } )
// delete a certain appointment
router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const appointments = await appointment.findById(id)
     const appo = appointments._id
     const deletedAppointment = await appointment.findOneAndDelete(appo)
     res.json({msg:'Appointment was deleted successfully', data: deletedAppointment})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


// get all appointments for a certain member

router.get("/getapps/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const appointments = await appointment.find();
   const filtered= appointments.filter(appointments => appointments.memberID===id);
    res.json({data:filtered});
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

// get all appointments for a certain lifecoach
router.get("/getappsL/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const appointments = await appointment.find();
   const filtered= appointments.filter(appointments => appointments.lifeCoachID===id);
    res.json({data:filtered});
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

module.exports = router;
