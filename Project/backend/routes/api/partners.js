// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const bodyParser=require('body-parser');
const validator = require('../../validations/partnerValidations')
//router.use(express.json);
// Models
const Partner = require('../../models/Partner')
const Task = require('../../models/Task')
const User = require('../../models/User')
router.use(bodyParser.urlencoded({extended:false}));


//create partner using mongo 
router.post('/',async (req, res) => {
    try{
    const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })

    const u = await User.findOne({username: req.body.username})
    if(!u){
        const newUser=await Partner.create(req.body)
        dataArr = [
            {
            username: newUser.username,
            password: newUser.password,
            type: "partner",
            id: newUser._id
            }
        ]
        const user = await User.create(dataArr)
        res.json({data:newUser})
    } else {
        res.status(400).send({ error: 'Username already exists' })
    }
    }
    catch(error) {
        console.log(error)
    }


});
// Get all partners using mongo 
router.get('/', async (req, res) => {
    const partners_=await Partner.find()
    if(!partners_) return res.status(400).send({error:result.error.details[0].message});
    res.json({ data: partners_})
    //res.send(partners_)
})
// Get a certain partner using mongo
router.get('/:id',async (req, res) => {
    const partnerId = req.params.id
    const partner = await Partner.findById(partnerId)  
    if(!partner) return res.status(400).send({error:result.error.details[0].message});
    res.send(partner)
})

// Update a partner's name using mongo
router.put('/:id',async (req, res) => {
    try{
    const id=req.params.id
    // var schema = {
	// 	name: Joi.string().min(1).required(),
    //     password: Joi.string().min(3).required()

    // }
    // const result = Joi.validate(req.body, schema);
    // if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
    const partnerup=await Partner.findById(id)   
    if(!partnerup) return  res.status(400).send({ error: result.error.details[0].message });
    const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const partner = await Partner.findOneAndUpdate({"_id":id},req.body)
     if(req.body.username) await User.findOneAndUpdate({id: partner._id},{username: req.body.username})
     if(req.body.password) await User.findOneAndUpdate({id: partner._id},{password: req.body.password})
    res.send({data:partner})}

    catch(error){
        res.send(error)
    }
})
//delete partner using mongo based on their id
router.delete('/:id',async (req, res) => {
    const partnerId = req.params.id 
    const partner1 = await Partner.findByIdAndDelete(partnerId)  
    if(!partner1) return res.status(400).send({error:result.error.details[0].message});
    /*const index = partners.indexOf(partner)
    
    partners.splice(index,1)*/
    
    const deleteuser = await user.findOneAndDelete(partner1.username)
    res.send({msg:"done"})
})
  
router.put('/addAttribute/:id', async (req,res) => {
    try {
     var schema = {
        attributeName: Joi.string().min(3).required(),
        attributeDescription: Joi.string().min(8).required()
     }

     const result = Joi.validate(req.body, schema);
    
     if (result.error) return res.status(400).send({ error: result.error.details[0].message })
     const id = req.params.id
     const task = await Task.find({ '_id' : id })
     const extraAttributes = await Task.find({ '_id' : id },{_id:0,extraAtt:1})
     const attributeName = req.body.attributeName
     const attributeDescription = req.body.attributeDescription
  
     if (!task) return res.status(404).send({ error: 'Task does not exist' })
     if (!extraAttributes) return res.status(404).send({ error: 'extraAttributes does not exist' })
     if (!attributeName) return res.status(404).send({ error: 'Attribute name can not be empty' })
     if (!attributeDescription) return res.status(404).send({ error: 'Desciption can not be empty' })

     var newAttribute = attributeName + ': ' + attributeDescription

     await Task.findByIdAndUpdate({'_id' : id} , { $push: { 'extraAtt' : newAttribute } })

     res.json({msg: 'Attribute added successfully'})
  
    }
    catch(error) {
        console.log(error)
    }
  })

module.exports = router;
