const Member = require('../models/Member.js');
class lifecoach{
    
    constructor(name, age,skills, intrests,pastEvents,completedProjects,reviews,certificates ,specification,salary){
        member.call(this,name, age,skills, intrests,pastEvents,completedProjects,reviews,certificates);
        this.specification = specification;
        this.salary = salary;
    }

}
module.exports = lifecoach