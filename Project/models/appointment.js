const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  location: {
    type: String,
    required: true
  },
  slot: {
    type: Date,
    required: true
  },
  lifeCoachID: {
    type: Number,
    required: true
  },
  lifeCoachName: {
    type: String,
    required: true
  },
  memberID: {
    type: Number,
    required: true
  },
  memberName: {
    type: String,
    required: true
  },
  confirm: {
    type: boolean,
    required: true
  },
});
  module.exports = appointment = mongoose.model('appointment',appointmentSchema);