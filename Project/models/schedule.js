// The location model
const uuid = require('uuid');
class schedule {
    constructor(id, lifecoach, specification,slot) {
        this.id = id;
        this.lifecoach = lifecoach;
        this.specification=specification;
        this.slot=slot;
        
    };
}

module.exports = schedule