class Member{
constructor(name,age,skills,intrests,pastEvents,completedProjects,reviews,certificates) {
    User.call(this,name, age);
    this.skills=skills;
    this.intrests=intrests;
    this.pastEvents=pastEvents;
    this.completedProjects=completedProjects;
    this.reviews=reviews;
    this.certificates=certificates;
  };
};
  module.exports = Member;