const mongoose = require('mongoose')
const Adminschema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})
Admin = mongoose.model('Admin',Adminschema)

module.exports = Admin  