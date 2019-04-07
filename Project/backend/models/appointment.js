const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  location: {
    type: Array,
  },
  slot: {
    type: Array,
  },
  lifeCoachID: {
    type: String,
    required: true
  },
  lifeCoachName: {
    type: String,
    required: true
  },
  memberID: {
    type: String,
    required: true
  },
  memberName: {
    type: String,
    required: true
  },
  confirm: {
    type: Boolean,
    default: false,

  },
});
  module.exports = appointment = mongoose.model('appointment',appointmentSchema);