const uuid = require('uuid')
class Member{
constructor(id,name,age,skills,intrests,pastEvents,completedProjects,reviews,certificates) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.skills=skills;
    this.intrests=intrests;
    this.pastEvents=pastEvents;
    this.completedProjects=completedProjects;
    this.reviews=reviews;
    this.certificates=certificates;
  };
};
  module.exports = Member;