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
// temporary data created as if it was pulled out of the database ...
/*const partners = [
	new Partner(1,'Stinson', 30,'BStrinson','legendary'),
	new Partner(2,'Audren', 27,'Laudren','sonofabeach'),
	new Partner(3,'Moseby', 29,'mosebyboy','detectiveM'),
	new Partner(4,'Eriksen', 27,'judgeEriksen','just press options'),
	new Partner(5,'Schrbatsky', 28,'MallGirl','CANADA')
];*/

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: partners }));

// Create a new user
router.post('/', (req, res) => {
	const name = req.body.name;
    const age = req.body.age;
    const username = req.body.username;
    const password = req.body.password; 

	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!age) return res.status(400).send({ err: 'Age field is required' });
    if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });
    if (!username) return res.status(400).send({ err: 'UserName field is required' });
    if (!password) return res.status(400).send({ err: 'Password field is required' });

	const newUser = {
		name,
		age,
        id: uuid.v4(),
        username,
        password,
	};
	return res.json({ data: newUser });
});
//create partner using mongo 
router.post('/joi',async (req, res) => {
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
router.get('/api/partners', async (req, res) => {
    const partners_=await Partner.find()
    if(!partners_) return res.status(400).send({error:result.error.details[0].message});
    res.send(partners_)
})
// Get a certain partner using mongo
router.get('/api/partners/:id',async (req, res) => {
    const partnerId = req.params.id
    const partner = await Partner.findById(partnerId)  
    if(!partner) return res.status(400).send({error:result.error.details[0].message});
    res.send(partner)
})

// Update a partner's name
router.put('/api/partners/:id',async (req, res) => {
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

router.delete('/api/partners/:id',async (req, res) => {
    const partnerId = req.params.id 
    const partner1 = await Partner.findByIdAndDelete(partnerId)  
    if(!partner1) return res.status(400).send({error:result.error.details[0].message});
    /*const index = partners.indexOf(partner)
    
    partners.splice(index,1)*/
    
    res.send({msg:"done"})
})
    

module.exports = router;
