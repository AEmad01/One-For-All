// The location model
const slot = require('../models/slot.js');
class schedule {
    constructor(startTime,endTime,name, specification,) {
        slot.call(this,startTime,endTime);
        this.name=name;
        this.specification=specification;

    };
}

module.exports = schedule