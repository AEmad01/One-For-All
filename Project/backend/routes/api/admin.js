const express = require('express');
const router = express.Router();
const admin = require("../../models/Admin.js");
const validator = require('../../validations/adminValidations');
const user = require('../../models/User')

// Get all Admins
router.get("/", async (req, res) => {
    const admin1 = await admin.find();
    res.json({ data: admin1 });
  })
  //Get a specific admin
router.get("/getadmin/:id", async (req, res) => {
  const id = req.params.id
  const admin2 = await admin.findById(id)
  res.send(admin2)
});
// create new admin(temp)
  router.post('/', async (req,res) => {
    try {
        
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newadmin = await admin.create(req.body)
     dataArr = [
       {
         username: newadmin.username,
         password: newadmin.password,
         type: "admin",
         id: newadmin._id
       }
     ]
     const newuser = await user.create(dataArr)
     res.json({msg:'admin was created successfully', data: newadmin})
    }
    catch(error) {
        console.log(error)
    }  
 })
 //update an admin
 router.put('/updateAdmin/:id', async (req,res) => {
  try {
   const id = req.params.id
   const admin1 = await admin.find({id})
   if (!admin1) return res.status(404).send({ error: "admin does not exist" })
   const isValidated = validator.updateValidation(req.body)
   if (isValidated.error)
     return res
       .status(400)
       .send({ error: isValidated.error.details[0].message })
   const updateAdmin = await admin.findOneAndUpdate({_id: id} , req.body)
   res.json({msg: 'admin updated successfully',data:updateAdmin})
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
     const deleteuser = await user.findOneAndDelete({username: deleteAdmin.username})
     res.json({msg:'admin was deleted successfully', data: deleteAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 });

module.exports = router;