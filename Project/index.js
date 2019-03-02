const express = require('express')


const users = require('./routes/api/users')
const members = require('./routes/api/members')
const appointments = require('./routes/api/appointments')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Litren Hub</h1>
    <a href="/api/appointments">Appointments</a>
    <a href="/api/members">Members</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/members', members)
app.use('/api/appointments', appointments)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
