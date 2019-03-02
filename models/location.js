// The location model
const uuid = require('uuid');
class location {
    constructor(name, address, city, country, time, sender, reciever) {
        this.name=name;
        this.address=address;
        this.city=city;
        this.country=country;
        this.time=time;
        this.sender = sender;
        this.reciever = reciever;
        this.id = uuid.v4();
        

    };
}

module.exports = location
