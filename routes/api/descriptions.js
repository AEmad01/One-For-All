const express = require('express')
const router = express.Router()

// We will be connecting using database 
const Description = require('../../models/Description')

        
// temporary data created as if it was pulled out of the database ...
const Descriptions = [
    new Description('The Prince','1998/12/11', 'The Prince is a 16th-century political treatise by the Italian diplomat and political theorist Niccolò Machiavelli.','Stinson'),
    new Description('Crime and Puishment', '1600/11/11','Crime and Punishment is a novel by the Russian author Fyodor Dostoevsky. It was first published in the literary journal The Russian Messenger in twelve centuries','Audren'),
    
];


router.post('/sendD',function(req,res){

Descriptions.push({TaskName: req.body.TaskName,DateTime: req.body.DateTime,Text: req.Text, PartnerName : req.PartnerName})



})

router.get('/', (req, res) => res.json({ data: Descriptions }))



module.exports = router