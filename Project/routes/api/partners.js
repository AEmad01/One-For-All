// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const bodyParser=require('body-parser');
//router.use(express.json);
// Models
const Partner = require('../../models/Partner');
router.use(bodyParser.urlencoded({extended:false}));

//create partner using mongo 
router.post('/',async (req, res) => {
	var schema = {
		name: Joi.string().min(3).required(),
        age: Joi.number().required(),
        username: Joi.string().min(8).required(),
        password: Joi.string().min(8).required()

	}

	const result = Joi.validate(req.body, schema);

    if (result.error) return res.status(400).send({ error: result.error.details[0].message });

    const newUser=await Partner.create(req.body)
    res.json({data:newUser})


});
// Get all partners using mongo 
router.get('/', async (req, res) => {
    const partners_=await Partner.find()
    if(!partners_) return res.status(400).send({error:result.error.details[0].message});
    res.send(partners_)
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
    var schema = {
		name: Joi.string().min(3).required(),
        password: Joi.string().min(8).required()

    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    
    const partnerup=await Partner.findById(id)   
    if(!partnerup) return  res.status(400).send({ error: result.error.details[0].message });
    const partner = await Partner.findOneAndUpdate({"_id":id},req.body)
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
    
    res.send({msg:"done"})
})
    

module.exports = router;
