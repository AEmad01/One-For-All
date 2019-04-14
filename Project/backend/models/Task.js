const mongoose= require('mongoose')
const Schema = mongoose.Schema;
const TaskSchema= new Schema({
 name :{
     type: String,
     required: true
 },
time: {
    type: Date,
    required: true
},
effort: {
    type: String,
    required: true
},
levelOfCommitment: {
    type: String,
    required: true
},
experienceLevel: {
    type: String,
    required: true
},
partnerID: {
    type: String,
    required: true
},
partnerName:{
    type: String,
    required: true
},  
monetaryCompensation: {
    type: String,
    required: true
},
consultency: {
    type: String,
    required: true
},
setOfSkills: {
    type: [String],
    required: true
},
memberID:{
    type: String,
    required: false
},
memberName:{
    type:String,
    required: false 
},
candidates:{
    type:Array,
    required: false
},

Description:{
    type:String,
    required: true 
},
extraAtt:{
    type: [String],
    required: true
},
Status:{
    type:Boolean,
    required: false
}
})
  module.exports = Task = mongoose.model('Task',TaskSchema);