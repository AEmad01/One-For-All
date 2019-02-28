const express = require('express')
const partners = require('./api/partners')
//const partners = require('../routes/api/partners')
//const descriptions = require('./routes/api/descriptions')
const descriptions = require('./api/descriptions')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to Lirten Hub</h1>
    <a href="/api/partners">Partners</a>
    <a href="/api/descriptions">Descriptions</a>
    `);
})

// Direct routes to appropriate files 
app.use('/api/partners', partners)
app.use('/api/descriptions', descriptions)

// Handling 404
app.use((req, res) => {
    res.status(404).send({err: 'We can not find what you are looking for'});
 })

const port = 3000
app.listen(port, () => console.log(`Server up and running on port ${port}`))
