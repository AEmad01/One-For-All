// The location model
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const bodyParser= require ('body-parser');
const schedule = require('../../models/schedule');
router.use(bodyParser.urlencoded({extended:false}));
const LifeCoachschedule = [
    new schedule('Abdullah','mental',2),
	new schedule('Walid','health',3),
	new schedule('Ahmed','health',1),
];


router.get('/', (req, res) => res.json({ data: LifeCoachschedule }));


router.post('/', (req, res) => {
	const lifecoach = req.body.lifecoach;
    const specification = req.body.specification;
    const slots = req.body.slots;

	if (!lifecoach) return res.status(400).send({ err: 'Name field is required' });
	if (typeof lifecoach !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!specification) return res.status(400).send({ err: 'specification field is required' });
	if (typeof specification !== 'string') return res.status(400).send({ err: 'Invalid value for specification' });
    if (!slots) return res.status(400).send({ err: 'slots field is required' });
	if (typeof slots !== 'number') return res.status(400).send({ err: 'Invalid value for slots' });

	const newSchedule = {
        lifecoach,
        specification,
        slots
	};
	return res.json({ data: newSchedule  });
});

router.post('/joi', (req, res) => {
	const lifecoach = req.body.lifecoach;
    const specification = req.body.specification;
    const slots = req.body.slots;

	const schema = {
        lifecoach: Joi.string().min(3).required(),
        specification: Joi.string().min(1).required(),
		slots: Joi.number().required(),
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newSchedule = {
        lifecoach,
        specification,
        slots
	};
	return res.json({ data: newSchedule  });
});

router.put('/api/LifeCoachschedule/:id', (req, res) => {
    console.log(req.body);
    const lifecoachhh = req.body.lifecoach 
    const updatedSpecification = req.body.specification
    const updatedSlots = req.body.slots	
console.log(lifecoachhh);
    const lifecoachh = LifeCoachschedule.find(lifecoachh=> lifecoachh.lifecoach == lifecoachhh)
    console.log(lifecoachh)
    lifecoachh.lifecoach = lifecoachhh
    lifecoachh.specification = updatedSpecification
    lifecoachh.slots =  updatedSlots

    res.send(LifeCoachschedule)
})

router.delete('/api/LifeCoachschedule/:id', (req, res) => {
    const LifecoachId = req.body.lifecoach 
	const lifecoachh = LifeCoachschedule.find(lifecoachh=> lifecoachh.lifecoach == LifecoachId)
    const index = LifeCoachschedule.indexOf(lifecoachh)
    LifeCoachschedule.splice(index,1)
    res.send(LifeCoachschedule)
})

module.exports = router;