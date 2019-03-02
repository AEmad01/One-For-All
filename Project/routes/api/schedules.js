// The location model
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const bodyParser= require ('body-parser');
const schedule = require('../../models/schedule');
router.use(bodyParser.urlencoded({extended:false}));
const schedules = [
    new schedule(1,'Abdullah','mental',2),
	new schedule(2,'Walid','health',3),
	new schedule(3,'Ahmed','health',1),
];


router.get('/', (req, res) => res.json({ data: schedules }));


router.post('/', (req, res) => {
    const id =req.body.id;
    const lifecoach = req.body.lifecoach;
    const specification = req.body.specification;
    const slots = req.body.slots;

	if (!lifecoach) return res.status(400).send({ err: 'Name field is required' });
	if (typeof lifecoach !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!specification) return res.status(400).send({ err: 'specification field is required' });
	if (typeof specification !== 'string') return res.status(400).send({ err: 'Invalid value for specification' });
    if (!slots) return res.status(400).send({ err: 'slots field is required' });
	
	const newSchedule = {
        id,
        lifecoach,
        specification,
        slots
	};
	return res.json({ data: newSchedule  });
});

router.post('/joi', (req, res) => {
    const id =req.body.id;
    const lifecoach = req.body.lifecoach;
    const specification = req.body.specification;
    const slots = req.body.slots;

	const schema = {
        id: Joi.number().min(1).required(),
        lifecoach: Joi.string().min(3).required(),
        specification: Joi.string().min(1).required(),
		slots: Joi.number().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newSchedule = {
        id,
        lifecoach,
        specification,
        slots
	};
	return res.json({ data: newSchedule  });
});

router.put('/api/schedules/:id', (req, res) => {
    console.log(req.body);
    const lifecoachId = req.params.id 
    const lifecoachhh = req.body.lifecoach 
    const updatedSpecification = req.body.specification
    const updatedSlots = req.body.slots	
console.log(lifecoachId);
    const lifecoachh = schedules.find(lifecoachh=> lifecoachh.id == lifecoachId)
    console.log(lifecoachh)
    lifecoachh.lifecoach = lifecoachhh
    lifecoachh.specification = updatedSpecification
    lifecoachh.slots =  updatedSlots

    res.send(schedules)
})

router.delete('/api/schedules/:id', (req, res) => {
    const LifecoachId = req.params.id 
	const lifecoachh = schedules.find(lifecoachh=> lifecoachh.id == LifecoachId)
    const index = schedules.indexOf(lifecoachh)
    schedules.splice(index,1)
    res.send(schedules)
})

module.exports = router;