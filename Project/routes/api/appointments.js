// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const appointment = require('../../models/appointment');

// temporary data created as if it was pulled out of the database ...
const appointments = [
	new appointment('cairo',1,'hazem','ahmed',false)
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all appointment
router.get('/', (req, res) => res.json({ data: appointments }));

// Create a new appointment
router.post('/', (req, res) => {
	const location = req.body.location;
    const slot = req.body.slot;
    const lifeCoach = req.body.lifeCoach;
    const person = req.body.person;


	if (!location) return res.status(400).send({ err: 'Name field is required' });
	if (typeof location !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!slot) return res.status(400).send({ err: 'Age field is required' });
    if (typeof slot !== 'number') return res.status(400).send({ err: 'Invalid value for age' });
    if (!lifeCoach) return res.status(400).send({ err: 'Name field is required' });
    if (typeof lifeCoach !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    if (!person) return res.status(400).send({ err: 'Name field is required' });
	if (typeof person !== 'string') return res.status(400).send({ err: 'Invalid value for name' });

	const newAppointment = {
		location,
        slot,
        lifeCoach,
		person,
		id: uuid.v4(),
	};
	return res.json({ data: newAppointment});
});

router.post('/joi', (req, res) => {
	const location = req.body.location;
    const slot = req.body.slot;
    const lifeCoach = req.body.lifeCoach;
    const person = req.body.person;

	const schema = {
		location: Joi.string().required(),
		slot: Joi.number().required(),
		lifeCoach: Joi.string().required(),
		person: Joi.string().required()
	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newAppointment = {
		location,
        slot,
        lifeCoach,
		person,
		id: uuid.v4(),
	};
	return res.json({ data: newAppointment });
});

module.exports = router;