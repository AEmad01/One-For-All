// The location model
const uuid = require('uuid');
class schedule {
    constructor(lifecoach, specification,slot) {
        this.lifecoach = lifecoach;
        this.specification=specification;
        this.slot=slot;
        this.id = uuid.v4();
    };
}

module.exports = schedule