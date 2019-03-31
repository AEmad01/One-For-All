const express = require("express")
const router = express.Router()
const Joi = require('joi')
const Task = require("../../models/Task.js")
const validator = require("../../validations/taskValidations")
const Member = require("../../models/Member")
const admins = require("../../models/Admin.js")
//get all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find()
  res.json({ data: tasks })
});
// search for task with name
router.get("/search", async (req, res) => {
  const name = req.body.name
  const tasks = await Task.find({ name: name })
  res.json({ data: tasks })
});
//delete a task
router.delete('/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedTask = await Task.findByIdAndDelete(id)
   res.json({msg:'Task was deleted successfully', data: deletedTask})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
})
// get a certin task 
router.get('/:id',async (req, res) => {
  const id = req.params.id
  const tasks = await Task.findById(id)  
  if(!tasks) return res.status(400).send({error:result.error.details[0].message})
  res.send(tasks)
});
// apply on task with member
router.post("/apply/:id/:mid", async (req, res) => {
  try{
    const id = req.params.id
    const tasks = await Task.findById(id)  
    if(!tasks) return res.status(400).send({error:result.error.details[0].message})
    const mid = req.params.mid
    const members = await Member.findById(mid)  
    if(!members) return res.status(400).send({error:result.error.details[0].message})
    tasks.candidates.push(members);
    const temp = await tasks.save();
    res.send(tasks)
  }
  catch (error) {
    // We will be handling the error later
    res.status(404).send({ error: "error" })
    console.log(error)
  }

});
//partner posting description and defining other attributes
//ID of PARTNER ONLY ENTERED IN THE POST OF THE TASK, MUST BE PARTNER
router.post("/partner/:id", async (req, res) => {
  const id = req.params.id
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error)
      return res.status(400).send({ error: isValidated.error.details[0].message })
    //const newTask = await Task.create(req.body);

    const partnerm = await partner.findById(id);
    if (partnerm.id !== undefined) {
      const task = await Task.create(req.body);
      res.json({ msg: "Task was created successfully", data: task })
      partnerm.Task.push(task)

      const temp = await partnerm.save()
      res.send(partnerm)
    }
  } catch (error) {
    // We will be handling the error later
    res.status(404).send({ error: "Only Partner can post" })
    console.log(error)
  }
});
//admin posting task and defining other attributes
//ID of Admin ONLY ENTERED IN THE POST OF THE TASK, MUST BE admin
router.post("/admin/:id", async (req, res) => {
  const id = req.params.id
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error)
      return res.status(400).send({ error: isValidated.error.details[0].message })
    //const newTask = await Task.create(req.body);

    const admin1 = await admins.findById(id);
    if (admin1.id !== undefined) {
      const task = await Task.create(req.body);
      res.json({ msg: "Task was created successfully", data: task })
      admin1.Task.push(task)

      const temp = await admin1.save()
      res.send(admin1)
    }
  } catch (error) {
    // We will be handling the error later
    res.status(404).send({ error: "Only admin can post" })
    console.log(error)
  }
});
// post a task
router.post("/", async (req, res) => {
  try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message })
    const newTask = await Task.create(req.body);
    res.json({ msg: "Task was created successfully", data: newTask })
  } catch (error) {
    // We will be handling the error later
    res.status(404).send({ error: "Only Partner can post" })
    console.log(error);
  }
});
// Update a task
router.put("/updatetask/:id", async (req, res) => {
  try {
    const id = req.params.id;
    
    const task = await Task.find({id})
    if (!task) return res.status(404).send({ error: "task does not exist" })
    const isValidated = validator.updateValidation(req.body)
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message })
    
    const updatedTask = await Task.findOneAndUpdate({_id: id} , req.body)
    res.json({ msg: "Task updated successfully" })
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
});
// admin  add attribute 
router.put("/addattributeAD/:id", async (req, res) => {
  try {
    const id = req.params.id
    const tasks = await Task.findById(id)  
    if(!tasks) return res.status(400).send({error:result.error.details[0].message})
    const name1 =req.body.name1
    const data1 =req.body.data1
    const all = name1+":"+data1 
    
    tasks.extraAtt.push(all)
    const temp = await tasks.save()
    res.send(tasks) 
    res.json({ msg: "Task attribute added successfully" })
  } catch (error) {
    // We will be handling the error later
    console.log(error)
  }
});

//negotiation

router.put('/chooseApplication/:mid/:id', async (req,res) => {

  try {

  var schema = Joi.string().min(3).required()

  const result = Joi.validate(req.body.candidateName, schema)
  if (result.error) return res.status(400).send({ error: 'Candidate name has to be of length 3 or more' })
  
  const id = req.params.id
  const candidateID = req.params.mid
  const task = await Task.find({ _id : id })
  const member = await Member.find({ _id : candidateID })
  const candidateName = req.body.candidateName

  if (!candidateName) return res.status(404).send({ error: 'Name cannot be empty' })
  if (!task) return res.status(404).send({ error: 'Task does not exist' })
  if (!member) return res.status(404).send({ error: 'Member does not exist'})

  await Task.findOneAndUpdate({_id : id} , {memberID : candidateID , memberName: candidateName})
  await Task.findByIdAndUpdate({'_id' : candidateID} , { $push: { 'notification' : 'You have been accepted to the task' } })
  
  res.json({msg: 'Candidate successfully accepted'})

  }
  catch(error) {
      console.log(error)
  }
})

module.exports = router;