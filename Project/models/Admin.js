const uuid = require('uuid')

// The User Model
class Admin {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = uuid.v4();
    };
};

module.exports = Admin  