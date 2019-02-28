const User= require("./User")
class Member{

  constructor(name,age,skills,intrests,pastEvents,completedProjects,reviews,certificates) {
    //User.call(this,name, age);
    new User(this.name=name,this.age=age);
    //this.name=name;
    //this.age=age;
    this.skills=skills;
    this.intrests=intrests;
    this.pastEvents=pastEvents;
    this.completedProjects=completedProjects;
    this.reviews=reviews;
    this.certificates=certificates;
  };
};
  module.exports = Member;