const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const LifecoachSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  intrests: {
    type: String,
    required: true
  },
  pastEvents: {
    type: String,
    required: true
  },
  completedProjects: {
    type: String,
    required: true
  },
  reviews: {
    type: String,
    required: true
  },
  certificates: {
    type: String,
    required: true
  },
  specification: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  Schedule:{
    type:Array
},
Appointments:{
  type:Array
},
  Notification: {
    type: [String],
    required: false
  },
});
  module.exports = Lifecoach = mongoose.model('Lifecoach',LifecoachSchema);
