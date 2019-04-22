const express = require("express");
const router = express.Router();
const Lifecoach = require("../../models/lifecoach.js");
const Schedule = require("../../models/schedule");

const notifier = require('node-notifier');
const validator = require("../../validations/lifecoachValidations.js");
const validatorApp = require("../../validations/appointmentValidation")
const appointment = require('../../models/appointment')
const user = require('../../models/User')
var open = require('open');
// Get all life coaches
router.get("/", async (req, res) => {
  const lifecoachs = await Lifecoach.find();
  res.json({ data: lifecoachs });
});


router.get('/appointments/:id', async (req, res) => {
  const id = req.params.id
  const lifecoach = await Lifecoach.findById(id)
  if(!lifecoach) return res.status(404).send({error: 'Lifecoach does not exist'})
  const App= await appointment.findOne({lifeCoachID:id})

  res.json({ data:[App]})


});

router.get('/schedule/:id', async (req, res) => {
  const id = req.params.id
  const lifecoach = await Lifecoach.findById(id)
  if(!lifecoach) return res.status(404).send({error: 'Lifecoach does not exist'})
  const sch= lifecoach.Schedule
  res.json({ data:sch})

});

router.get('/notification/:id', async (req, res) => {
  const id = req.params.id
  const lifecoach = await Lifecoach.findById(id)
  if(!lifecoach) return res.status(404).send({error: 'Lifecoach does not exist'})
  const noti= lifecoach.Notification
  res.json({ data:noti})

});
// Get a certain lifecoach
router.get('/:id',async (req, res) => {

  const lifecoachID = req.params.id
   const lifecoach1 = await Lifecoach.findById(lifecoachID)
   if(!lifecoach1) return res.status(404).send({error:result.error.details[0].message})
   res.send(lifecoach1)
  }
)
// Create a new lifecoach
router.post("/", async (req, res) => {
  try {
    const username1 = req.body.username
    const isValidated = validator.createValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    const u = await user.findOne({username: username1})
    if(!u){
        const newlifecoach = await Lifecoach.create(req.body);
        dataArr = [
          {
            username: newlifecoach.username,
            password: newlifecoach.password,
            type: "lifecoach",
            id: newlifecoach._id
          }
        ]
        const newuser = await user.create(dataArr)
        res.json({
          msg: "life coach was created successfully",
          data: newlifecoach
        });
    } else {
      res.status(400).send({ error: 'Username already exists' })
    }
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
//accept booking
router.put("/booking/:id", async (req, res) => {
  try {
  const id = req.params.id
  const appointmentm = await appointment.findById(id);
  if (!appointmentm)
    return res.status(404).send({ error: "appointment does not exist" });
    const isValidated = validatorApp.updateValidation(req.body);
  if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message }) ;

    const updatedappointment = await appointmentm.updateOne(req.body);
     res.json({msg:'appointment updated successfully', data: updatedappointment})
  
    }
    catch(error) {
        res.status(404).send({error: 'Only appointment can be updated'})
        console.log(error)
  }
});


// Update a lifecoach
router.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const lifecoach = await Lifecoach.find({id});
    if (!lifecoach) return res.status(404).send({ error: "lifecoach does not exist" });
    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
    
    const updatedLifecoach = await Lifecoach.findOneAndUpdate({_id: id} , req.body);
    if(req.body.username) await user.findOneAndUpdate({id: updatedLifecoach._id},{username: req.body.username})
    if(req.body.password) await user.findOneAndUpdate({id: updatedLifecoach._id},{password: req.body.password})
    res.json({ msg: "Lifecoach updated successfully" });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});
// delete a certain lifecoach
router.delete('/delete/:id', async (req,res) => {
  try {
   const id = req.params.id
   const deletedLifecoach = await Lifecoach.findByIdAndDelete(id);
   const deleteuser = await user.findOneAndDelete({username: deletedLifecoach.username})
   
   res.json({msg:'Lifecoach was deleted successfully', data: deletedLifecoach})
  }
  catch(error) {
      // We will be handling the error later
      console.log(error)
  }  
});
router.get('/schedule/:id', async (req, res) => {


  const id = req.params.id
  const allsched = await Schedule.find();
  const filtered= allsched.filter(allsched => allsched.lifeCoachID===id);
  res.send({ data:filtered})
});
module.exports = router;
