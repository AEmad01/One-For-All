// The location model
const location = require('../models/location.js');
class schedule {
    constructor(name, slots, specification,time,location) {

        this.name=name;
        this.slots=slots;
        this.specification=specification;
        this.time=time;

    };
}

module.exports = Location