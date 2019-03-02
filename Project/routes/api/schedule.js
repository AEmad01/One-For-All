// The location model
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();
const schedule = require('../../models/schedule');

const schedules = [
    new schedule('Abdullah','mental',2),
	new schedule('Walid','health',3),
	new schedule('Ahmed','health',1),
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all schedules
router.get('/', (req, res) => res.json({ data: schedules}));

// Create a new user
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
		slots,
		id: uuid.v4(),
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
        slots,
		id: uuid.v4(),
	};
	return res.json({ data: newSchedule  });
});

module.exports = router;
