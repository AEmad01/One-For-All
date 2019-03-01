const express = require('express')
const admins = require('./routes/api/admin')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/admin">Admins</a>
    <a href="/api/task">tasks</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/admin', admins)
app.use('/api/task', tasks)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))