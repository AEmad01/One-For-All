const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  specification: {
    type: String,
    required: true
  },
  slots: {
    type: Array,
    required: false
  }
})
module.exports = Schedule = mongoose.model('schedules',scheduleSchema);
