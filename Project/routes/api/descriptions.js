const express = require('express')
const router = express.Router()
const bodyParser=require('body-parser');
// We will be connecting using database 
const Description = require('../../models/Description')
router.use(bodyParser.urlencoded({extended:false}));

        
// temporary data created as if it was pulled out of the database ...
const Descriptions = [
    new Description(1,'The Prince','1998/12/11', 'The Prince is a 16th-century political treatise by the Italian diplomat and political theorist Niccolò Machiavelli.','Stinson'),
    new Description(2,'Crime and Puishment', '1600/11/11','Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve centuries','Audren'),
    
];


router.post('/sendD',function(req,res){

Descriptions.push({TaskName: req.body.TaskName,DateTime: req.body.DateTime,Text: req.Text, PartnerName : req.PartnerName})



})
router.post('/', (req, res) => {
    const id = req.body.id;
	const TaskName = req.body.TaskName;
    const DateTime = req.body.DateTime;
    const Text = req.body.Text;
    const PartnerName = req.body.PartnerName; 

	if (!TaskName) return res.status(400).send({ err: 'Task Name field is required' });
	if (typeof TaskName !== 'string') return res.status(400).send({ err: 'Invalid value for Taskname' });
	if (!DateTime) return res.status(400).send({ err: 'DateTime field is required' });
    if (!Text) return res.status(400).send({ err: 'Text field is required' });
    if (!PartnerName) return res.status(400).send({ err: 'Partner name field is required' });

	const newUser = {
        id,
        TaskName,
        DateTime,
        Text,
        PartnerName
	};
	return res.json({ data: newUser });
});

router.post('/joi', (req, res) => {
    const id = req.body.id
	const TaskName = req.body.TaskName
    const DateTime = req.body.DateTime
    const Text = req.body.Text
    const PartnerName = req.body.PartnerName
    

	const schema = {
        id: joi.number().min(1).required(),
		TaskName: Joi.string().min(3).required(),
        DateTime: Joi.DateTime.required(),
        Text: Joi.string().min(8).required(),
        PartnerName: Joi.string().min(8).required()

	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newUser = {
        id,
    TaskName,
    DateTime,
    Text,
    PartnerName
        
    };
    Descriptions.push(newUser);
	return res.json({ data: newUser });
});

router.get('/', (req, res) => res.json({ data: Descriptions }))


router.put('/api/descriptions/:id', (req, res) => {
    console.log(req.body);
    const descriptionId = req.params.id 
    const taskname = req.body.TaskName
    const datetime = req.body.DateTime
    const text = req.body.Text
    const partnername = req.body.PartnerName
console.log(descriptionId);
    const description = Descriptions.find(description => description.id == descriptionId)
    console.log(description)
    description.TaskName = taskname
    description.DateTime = datetime
    description.Text = text
    description.PartnerName = partnername


    res.send(Descriptions)
})

router.delete('/api/descriptions/:id', (req, res) => {
    const descriptionId = req.params.id 
    const description = Descriptions.find(description => description.id == descriptionId)
    const index = Descriptions.indexOf(description)
    Descriptions.splice(index,1)
    res.send(Descriptions)
})




module.exports = router