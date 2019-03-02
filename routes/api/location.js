// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const location = require('../../models/location');

// temporary data created as if it was pulled out of the database ...
const location = [
    new location('Downtown','Tagmo3','Cairo','Egypt','7/3/2019 12:00 AM', 'Coach1', 'Member1'),
    new location('GUC','Tagmo3','Cairo','Egypt','7/3/2019 12:00 AM', 'Coach1', 'Member1')


];


// Get all locations
router.get('/', (req, res) => res.json({ data: location }));

router.post('/', (req, res) => {
	const name = req.body.name;
	const address = req.body.address;
	const city = req.body.city;
	const country = req.body.country;
	const time = req.body.time;
	const sender = req.body.sender;
    const reciever = req.body.reciever;


	if (!name) return res.status(400).send({ err: 'Name field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    
    if (!address) return res.status(400).send({ err: 'Address field is required' });
    if (typeof age !== 'string') return res.status(400).send({ err: 'Invalid value for Address' });
    
    if (!city) return res.status(400).send({ err: 'City field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for City' });

    if (!country) return res.status(400).send({ err: 'country field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for country' });

    if (!time) return res.status(400).send({ err: 'time field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for time' });
    
    if (!sender) return res.status(400).send({ err: 'sender field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for sender' });

    if (!reciever) return res.status(400).send({ err: 'receiver field is required' });
    if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for receiver' });

	const newLocation = {
		name,
        address,
        city,
        country,
        time,
        sender,
        receiver,
        id: uuid.v4(),

		
	};
	return res.json({ data: newLocation });
});

router.post('/joi', (req, res) => {
    const name;
    const address;
    const city;
    const country;
    const time;
    const sender;
    const receiver;

	const schema = {
		name: Joi.string().required(),
        address: Joi.string().required(),
		city: Joi.string().required(),
		country: Joi.string().required(),
		time: Joi.string().required(),
		sender: Joi.string().required(),
		reciver: Joi.string().required(),

	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newLocation = {
		name,
        address,
        city,
        country,
        time,
        sender,
        receiver,
        id: uuid.v4(),

	};
	return res.json({ data: newLocation });
});

// Get a certain location
app.get('/api/location/:id', (req, res) => {
    const locid = req.params.id
    const loc = location.find(loc => loc.id === locid)
    res.send(loc)
})

// Update a location time
app.put('/api/location/:id', (req, res) => {
    const locid = req.params.id 
    const updatedTime = req.body.time
    const loc = location.find(loc => loc.id === locid)
    loc.time = updatedTime
    res.send(location)
})


// Delete a location
app.delete('/api/location/:id', (req, res) => {
    const locid = req.params.id 
    const loc = location.find(loc => loc.id === locid)
    const index = location.indexOf(loc)
    location.splice(index,1)
    res.send(location)
})

module.exports = router;
