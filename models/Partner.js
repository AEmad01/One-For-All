const uuid = require('uuid')

// The User Model
class Partner{
    constructor(name,age,username,password) {
        this.name = name;
        this.age = age;
        this.id = uuid.v4();
        this.username = username;
        this.password = password;
    };
};

module.exports = Partner
