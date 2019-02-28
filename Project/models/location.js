// The location model
class Location {
    constructor(name, address, city, country,time,sender,reciver) {

        this.name=name;
        this.address=address;
        this.city=city;
        this.country=country;
        this.time=time;
        this.sender = sender;
        this.reciver = reciver;
    };
}

module.exports = Location