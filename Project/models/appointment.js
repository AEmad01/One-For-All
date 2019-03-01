const uuid = require('uuid');
class appointment{
    constructor(location,slot,lifeCoach,person,confirm){
        this.location=location;
        this.slot=slot;
        this.lifeCoach=lifeCoach;
        this.person=person;
        this.confirm = confirm;
        this.id = uuid.v4();
    }
}
module.exports=appointment