const slot = require('../models/slot.js');
const location = require('../models/location.js');
class appointment{
    
    constructor(location,slot,lifeCoach,person,confirm){
        this.location=Location;
        this.slot=slot;
        this.lifeCoach=lifeCoach;
        this.person=person;
        this.confirm = confirm;
    }
}
module.exports=appointment;