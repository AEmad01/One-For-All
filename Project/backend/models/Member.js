const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const MemberSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
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
  notification:{
    type: [String],
    required: false
  }
});
  module.exports = Member = mongoose.model('Member',MemberSchema);