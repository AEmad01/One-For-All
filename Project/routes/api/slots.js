const express = require('express');
const Joi = require('joi');
const router = express.Router();
const slot = require('../../models/slot');
const validator = require('../../validations/slotValidations')
const Schedule = require('../../models/schedule.js');

router.get('/getslots', async (req, res) => {
    const slots = await slot.find();
    res.json({ data: slots })
});


router.get('/', async (req, res) => {
  const slots = await slot.find();
  res.json({ data: slots })
});


router.post('/:id', async (req,res) => {
    const id = req.params.id
    
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message  })    
    const schedulem = await Schedule.findById(id);
    if(schedulem.id!== undefined){

    const newSlot = await slot.create(req.body)
     res.json({msg:'Slot was created successfully', data: newSlot})
     schedulem.slot.push(newSlot);
     const temp = await schedulem.save();
     res.send(schedulem);
    }

 });

 router.put('/pick/:id', async (req,res) => {
    const id = req.params.id
    try {
    const picked = await slot.findById(id);
    if (!picked)
      return res.status(404).send({ error: "slot does not exist" });
      const isValidated = validator.updateValidation(req.body);
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message }) ;
  
      const updatedslot = await picked.updateOne(req.body);
       res.json({msg:'slot updated successfully', data: updatedslot})
    
      }
      catch(error) {
          res.status(404).send({error: 'Only slot can be updated'})
          console.log(error)
    }
    

 });


 router.delete('/:id',async (req, res) => {
 try{ const slotid = req.params.id
  const deletedslot = await slot.findByIdAndDelete(slotid)  
res.json({msg:"Slot deleted", data: deletedslot}) 
 }
 catch (error) {
   console.log(error)
 }
});

 module.exports = router;
