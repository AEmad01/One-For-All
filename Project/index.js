const express = require('express')
const tasks = require('./routes/api/task')
const admins = require('./routes/api/admin')
const schedules = require('./routes/api/schedules')
const partners = require('./routes/api/partners')
const members = require('./routes/api/members')
const appointments = require('./routes/api/appointments')
const location = require('./routes/api/location')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())
mongoose.connect('mongodb://localhost/DB').then(()=> console.log('connected to DB')).catch(err => console.log('error'))
app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Litren Hub</h1>
    <a href="/api/partners">Partners</a>
    <a href="/api/appointments">Appointments</a>
    <a href="/api/members">Members</a>
    <a href="/api/schedules">schedules</a>
    <a href="/api/location">locations</a>           
    <a href="/api/admin">Admins</a>
    <a href="/api/task">tasks</a>
    `);
})

// Direct routes to appropriate files 

app.use('/api/admin', admins)
app.use('/api/task', tasks)
app.use('/api/partners', partners)
app.use('/api/members', members)
app.use('/api/appointments', appointments)
app.use('/api/schedules', schedules)
app.use('/api/location', location)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
