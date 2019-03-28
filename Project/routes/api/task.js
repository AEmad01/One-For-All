const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Task = require("../../models/Task.js")
const validator = require('../../validations/taskValidations')
const Member = require('../../models/Member')
const partner = require('../../models/Partner')

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json({ data: tasks })
});

//ID of PARTNER ONLY ENTERED IN THE POST OF THE TASK MUST BE PARTNER
router.post("/:id", async (req, res) => {
  const id = req.params.id
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });    
    //const newTask = await Task.create(req.body);
    
    const partnerm = await partner.findById(id);
    if(partnerm.id!== undefined){
      const task = await Task.create(req.body)
      res.json({ msg: "Task was created successfully", data: task });
    partnerm.Task.push(task);
      const temp = await partnerm.save();
      res.send(partnerm);
    }
    
  } catch (error) {
    // We will be handling the error later
    res.status(404).send({error: 'Only Partner can post'})
    console.log(error);
  }
});
// Update a task
router.put('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const task = await Task.findOne({id})
   if(!task) return res.status(404).send({error: 'task does not exist'})
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
   const updatedTask = await Task.updateOne(req.body)
   res.json({msg: 'Task updated successfully'})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})


//negotiation 


router.put('/chooseApplication/:id', async (req,res) => {
  try {
   const id = req.params.id
   const task = await Task.findOne({ id })
   const candidateName = req.body.name
   const candidateID = await Member.find({ name: ( ''+candidateName ) },{ id: 1 })
   const memberList = await Task.find({ id },{ candidates: 1 })
   const found = false

   if (!candidateName) return res.status(404).send({ error: 'Name cannot be empty' })
   if (!task) return res.status(404).send({ error: 'Task does not exist' })
   if (!candidateID) return res.status(404).send({ error: 'Member does not exist' })
   if (!memberList) return res.status(404).send({ error: 'MemberList does not exist' })
   const isValidated = validator.updateValidation( req.body )
   if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

   for(var i = 0; i < memberList.length ;i++){
      if ( memberList[i] == candidateName ) found = true
   }

  if ( found == true ) Task.findOneAndUpdate( id , { memberID: candidateID, memberName: candidateName} )

  res.json({msg: 'Task updated successfully'})

  }
  catch(error) {
      console.log(error)
  }
})

module.exports = router;
