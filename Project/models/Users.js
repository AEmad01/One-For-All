const uuid = require('uuid')

// The User Model
class Users {
    constructor(name, age,taskNumber) {
        this.name = name;
        this.age = age;
        this.id = uuid.v4();
        this.taskNumber= taskNumber;
    };
};

module.exports = Users  