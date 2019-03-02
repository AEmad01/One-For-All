// Dependencies
const express = require('express');
const Joi = require('joi');
const router = express.Router();
const bodyParser=require('body-parser');

// Models
const appointment = require('../../models/appointment');
router.use(bodyParser.urlencoded({extended:false}));
// temporary data created as if it was pulled out of the database ...
const appointments = [
	new appointment(1,'cairo',1,'hazem','ahmed',false)
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


	if (!location) return res.status(400).send({ err: 'location field is required' });
	if (typeof location !== 'string') return res.status(400).send({ err: 'Invalid value for location' });
	if (!slot) return res.status(400).send({ err: 'slot field is required' });
    if (typeof slot !== 'number') return res.status(400).send({ err: 'Invalid value for slot' });
    if (!lifeCoach) return res.status(400).send({ err: 'lifeCoach field is required' });
    if (typeof lifeCoach !== 'string') return res.status(400).send({ err: 'Invalid value for lifeCoach' });
    if (!person) return res.status(400).send({ err: 'person field is required' });
	if (typeof person !== 'string') return res.status(400).send({ err: 'Invalid value for person' });

	const newAppointment = {
		id: appointments.length + 1,
		location,
        slot,
        lifeCoach,
		person,
		
	};
	appointments.push(newAppointment);
	return res.json({ data: appointments});
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
		id: appointments.length + 1,
		location,
        slot,
        lifeCoach,
		person,
	};
	appointments.push(newAppointment);
	return res.json({ data: appointments });
});

// Get a certain appointments
router.get('/api/appointments/:id', (req, res) => {
    const appointmentId = req.params.id
    const appointment = appointments.find(appointment => appointment.id === appointmentId)  
    res.send(appointment)
});

// Update a appointments
router.put('/api/partners/:id', (req, res) => {
    console.log(req.body);
    const partnerId = req.params.id 
    const updatedName = req.body.name
    const updatedage = req.body.age
    const updatedusername = req.body.username
    const updatedpassword = req.body.password
console.log(partnerId);
    const partner = partners.find(partner=> partner.id == partnerId)
    console.log(partner)
    partner.name = updatedName
    partner.age = updatedage
    partner.username = updatedusername
    partner.password = updatedpassword


    res.send(partners)
})

module.exports = router;

