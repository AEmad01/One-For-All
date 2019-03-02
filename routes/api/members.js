const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const Member = require('../../models/Member.js');
const members = [
	new Member('Barney', 30,'hookups','women','sex','200 different women','reviews','MIT'),
	new Member('Ted', 27,'lecturing','Architecture','pastEvents','GNB HQ','reviews','GUC')
];

// Get all members
router.get('/', (req, res) => res.json({ data: members }));

// Create a new member
router.post('/', (req, res) => {
	const name = req.body.name;
    const age = req.body.age;
    const skills=req.body.skills;
    const intrests=req.body.intrests;
    const pastEvents=req.body.pastEvents;
    const completedProjects=req.body.completedProjects;
    const reviews=req.body.reviews;
    const certificates=req.body.certificates;
    const notification=notification;
	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!age) return res.status(400).send({ err: 'Age field is required' });
	if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });
	if (!skills) return res.status(400).send({ err: 'Skills field is required' });
    if (typeof skills !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    if (!intrests) return res.status(400).send({ err: 'intrests field is required' });
    if (typeof intrests !== 'string') return res.status(400).send({ err: 'Invalid value for intrest' });
    if (!pastEvents) return res.status(400).send({ err: 'pastEvent field is required' });
    if (typeof pastEvents !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    if (!completedProjects) return res.status(400).send({ err: 'Skills field is required' });
    if (typeof completedProjects !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    if (!reviews) return res.status(400).send({ err: 'Skills field is required' });
    if (typeof reviews !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    if (!certificates) return res.status(400).send({ err: 'Skills field is required' });
    if (typeof certificates !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    if (!notification) return res.status(400).send({ err: 'Skills field is required' });
    if (typeof certificates !== 'string') return res.status(400).send({ err: 'Invalid value for skills' });
    
	const newMember = {
		name,
		age,
        id: uuid.v4(),
        skills,
        intrests,
        pastEvents,
        completedProjects,
        reviews,
        certificates
	};
	return res.json({ data: newMember });
});

router.post('/joi', (req, res) => {
	const name = req.body.name
	const age = req.body.age
    const skills=req.body.skills;
    const intrests=req.body.intrests;
    const pastEvents=req.body.pastEvents;
    const completedProjects=req.body.completedProjects;
    const reviews=req.body.reviews;
    const certificates=req.body.certificates;
	const schema = {
		name: Joi.string().min(3).required(),
        age: Joi.number().required(),
        skills: Joi.string().min(3).required(),
        intrests: Joi.string().min(3).required(),
        pastEvents: Joi.string().min(3).required(),
        completedProjects: Joi.string().min(3).required(),
        reviews: Joi.string().min(3).required(),
        certificates: Joi.string().min(3).required(),

	}

	const result = Joi.validate(req.body, schema);

	if (result.error) return res.status(400).send({ error: result.error.details[0].message });

	const newMember = {
		name,
		age,
        id: uuid.v4(), 
        skills,
        intrests,
        pastEvents,
        completedProjects,
        reviews,
        certificates
	};
	return res.json({ data: newMember });
});
// Get a certain member
router.get('/api/members/:id', (req, res) => {
    const memberID = req.params.id
    const member = members.find(Member => Member.id === memberID)  
    res.send(member)
})

// Update a member's name
router.put('/api/members/:id', (req, res) => {
    const memberID = req.params.id 
    const updatedName = req.body.name;
	const updatedAge = req.body.age;
    const updatedSkills=req.body.skills;
    const UpdatedIntrests=req.body.intrests;
    const UpdatedPastEvents=req.body.pastEvents;
    const updatedCompletedProjects=req.body.completedProjects;
    const updatedReviews=req.body.reviews;
    const updatedCertificates=req.body.certificates;

    const Member = members.find(Member => Member.id === memberID)
    member.name=updatedName;
    member.age=updatedAge;
    member.skill=updatedSkills;
    member.reviews=updatedReviews;
    member.intrests=UpdatedIntrests;
    member.pastEvents=UpdatedPastEvents;
    member.completedProjects=updatedCompletedProjects;
    member.certificates=updatedCertificates;
    res.send(Member)
})
// delete a certain member
router.delete('/api/members/:id', (req, res) => {
    const memberID = req.params.id 
    const member = members.find(member => member.id === memberID)
    const index = memebrs.indexOf(member)
    members.splice(index,1)
    res.send(Member)
})

module.exports = router;
