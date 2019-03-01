const express = require('express')
const router = express.Router()
const Task = require('../../models/Task')
const Task = [
    new Task ('10:00', 'high', 3, 'senior' ,'google',4000,'wuzzuf',['active','focused'],123)
     ,new Task ('11:00', 'low', 2, 'junior' ,'yahoo',5000,'otlob',['old','focused'] )
     ,new Task ('9:00', 'medium', 1, 'senior' ,'nike',2000,'wuzzuf',['active','focused','humble'] )
     ,new Task ('20:00', 'high', 3, 'junior' ,'guc',6000,'sh5al',['humble','focused'] )
     ,new Task ('22:00', 'low', 1, 'senior' ,'apple',9000,'wuzzuf',['active','productive'] )]
     router.get('/', (req, res) => res.json({ data: Task }))
     module.exports = router