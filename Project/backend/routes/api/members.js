const express = require('express');
const router = express.Router();
const Member = require('../../models/Member.js');
const validator = require('../../validations/memberValidations.js')
const notifier= require('node-notifier');
const user = require('../../models/User')
const open= require('open');
// Get all members
router.get('/', async (req, res) => {
    const members = await Member.find();
    res.json({ data: members })
});
// Get the notifications of a certain member
router.get('/notification/:id', async (req, res) => {
    const id = req.params.id
    const member = await Member.findById(id)
    if(!member) return res.status(404).send({error: 'Member does not exist'})
    const noti= member.notification
    res.json({ data:noti})
});

// Create a new member
router.post('/createMember', async (req,res) => {
    try {
    
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const u = await user.findOne({username: req.body.username})
     if(!u){

        const newMember = await Member.create(req.body)
        res.json({msg:'Member was created successfully', data: newMember})
        dataArr = [
          {
            username: newMember.username,
            password: newMember.password,
            type: "member",
            id: newMember._id
          }
        ]
        const newuser = await user.create(dataArr)
      } else {
        res.status(400).send({ error: 'Username already exists' })
      }
    }
    catch(error) {
        console.log(error)
    }  
 })
 // get a certin member and get his/her notificatuons
 router.get('/:id',async (req, res) => {
    const id = req.params.id
    const newMember = await Member.findById(id)  
    if(!newMember) return res.status(400).send({error:result.error.details[0].message});
    res.send(newMember)
    if(newMember.notification.length!=0){
    notifier.notify({
        'title': 'Alert',
        'message': 'You have new Notifications',
        'wait': true
        }
      );
    }
  }
)
// Update a member
router.put("/update/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const member = await Member.find({id});
      if (!member) return res.status(404).send({ error: "member does not exist" });
      const isValidated = validator.updateValidation(req.body);
      if (isValidated.error)
        return res
          .status(400)
          .send({ error: isValidated.error.details[0].message });
      
      const updatedMember = await Member.findOneAndUpdate({_id: id} , req.body);
      if(req.body.username) await user.findOneAndUpdate({id: updatedMember._id},{username: req.body.username})
      if(req.body.password) await user.findOneAndUpdate({id: updatedMember._id},{password: req.body.password})
      res.json({ msg: "Member updated successfully" });
    } catch (error) {
      // We will be handling the error later
      console.log(error);
    }
  });
// delete a certain member
router.delete('/delete/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedMember = await Member.findByIdAndDelete(id);
     const deleteuser = await user.findOneAndDelete({username: deletedMember.username})
     
     res.json({msg:'Member was deleted successfully', data: deletedMember})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;
