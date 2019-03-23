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
    type: Number,
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
    type: Number,
    required: false
},
memberName:{
    type:String,
    required: false 
},
candidates:{
    type:[Number],
    required: false
}
})
  module.exports = Member = mongoose.model('members',TaskSchema);