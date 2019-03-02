const uuid = require('uuid');
class appointment{
    constructor(id,location,slot,lifeCoach,person,confirm){
        this.id = id;
        this.location=location;
        this.slot=slot;
        this.lifeCoach=lifeCoach;
        this.person=person;
        this.confirm = confirm;
        
    }
}
module.exports=appointment