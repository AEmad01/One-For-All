const uuid = require('uuid')
class Member{

  constructor(name,age,skills,intrests,pastEvents,completedProjects,reviews,certificates,notification) {
    this.name=name;
    this.age=age;
    this.skills=skills;
    this.intrests=intrests;
    this.pastEvents=pastEvents;
    this.completedProjects=completedProjects;
    this.reviews=reviews;
    this.certificates=certificates;
    this.notification=notification;
    this.id = uuid.v4();
  };
};
  module.exports = Member;