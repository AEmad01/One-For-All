const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create the schema
const PartnerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Task:{
        type:Array
    }
      
})

module.exports = Partner = mongoose.model('partners', PartnerSchema)
