const uuid = require('uuid')
class Member{
constructor(name,age,skills,intrests,pastEvents,completedProjects,reviews,certificates) {
    this.name = name;
    this.age = age;
    this.id = uuid.v4();
    this.skills=skills;
    this.intrests=intrests;
    this.pastEvents=pastEvents;
    this.completedProjects=completedProjects;
    this.reviews=reviews;
    this.certificates=certificates;
  };
};
  module.exports = Member;