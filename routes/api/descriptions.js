const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Description = require('../../models/Description')

        
// temporary data created as if it was pulled out of the database ...
const Descriptions = [
    new Description('The Prince','1998/12/11', 'The Prince is a 16th-century political treatise by the Italian diplomat and political theorist Niccolò Machiavelli.','Stinson'),
    new Description('Crime and Puishment', '1600/11/11','Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve centuries','Audren'),
    
];


router.post('/sendD',function(req,res){

Descriptions.push({TaskName: req.body.TaskName,DateTime: req.body.DateTime,Text: req.Text, PartnerName : req.PartnerName})



})
router.post('/', (req, res) => {
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
        TaskName,
        DateTime,
        Text,
        PartnerName
	};
	return res.json({ data: newUser });
});

router.post('/joi', (req, res) => {
	const TaskName = req.body.TaskName
    const DateTime = req.body.DateTime
    const Text = req.body.Text
    const PartnerName = req.body.PartnerName,
    

	const schema = {
		TaskName: Joi.string().min(3).required(),
        DateTime: Joi.DateTime.required(),
        Text: Joi.string().min(8).required(),
        PartnerName: Joi.string().min(8).required(),

	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newUser = {
    TaskName,
    DateTime,
    Text,
    PartnerName
        
	};
	return res.json({ data: newUser });
});

router.get('/', (req, res) => res.json({ data: Descriptions }))



module.exports = router