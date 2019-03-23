const express = require("express");
const router = express.Router();
const Task = require("../../models/Task.js");
const validator = require('../../validations/taskValidations');
// Get all task
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json({ data: tasks });
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



module.exports = router;
