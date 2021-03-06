const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const locationSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  member: {
    type: String,
    required: true
  },
  lifecoach: {
    type: String,
    required: true
  },
  confirmedLocation: {
    type: Boolean,
    default: false,
  },
 
  
});
  module.exports = location = mongoose.model('location',locationSchema)