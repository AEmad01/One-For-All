const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Task = require("../../models/Task.js")
const validator = require('../../validations/taskValidations')
const Member = require('../../models/Member')

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json({ data: tasks })
});
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });    
    const newTask = await Task.create(req.body);
    res.json({ msg: "Task was created successfully", data: newTask });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
<<<<<<< HEAD
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


=======
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
>>>>>>> 35b750002625e48f2ada6481efbcb0b9231cc3af

module.exports = router;
