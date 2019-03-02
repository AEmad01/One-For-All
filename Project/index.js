const express = require('express')
const schedules = require('./routes/api/schedules')
const partners = require('./routes/api/partners')
const descriptions = require('./routes/api/descriptions')
const members = require('./routes/api/members')
const appointments = require('./routes/api/appointments')
const location = require('./routes/api/location')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Litren Hub</h1>
    <a href="/api/partners">Partners</a>
    <a href="/api/descriptions">Descriptions</a>
    <a href="/api/appointments">Appointments</a>
    <a href="/api/members">Members</a>
    <a href="/api/schedules">schedules</a>
    <a href="/api/location">locations</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/partners', partners)
app.use('/api/descriptions', descriptions)
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
