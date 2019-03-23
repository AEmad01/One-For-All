const express = require("express");
const router = express.Router();
const Task = require("../../models/Task.js");
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
    const newMember = await Member.create(req.body);
    res.json({ msg: "Member was created successfully", data: newMember });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

module.exports = router;
