const mongoose = require('mongoose')
const Adminschema = new mongoose.Schema({
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