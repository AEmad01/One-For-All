const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string().required(),
      time: Joi.date().required(),
      effort: Joi.string().required(),
      levelOfCommitment: Joi.string().required(),
      experienceLevel: Joi.string().required(),
      completedProjects: Joi.string().required(),
      partnerID: Joi.number().required(),
      partnerName: Joi.string().required(),
      monetaryCompensation: Joi.string().required(),
      consultency: Joi.string().required(),
      setOfSkills: Joi.array().required(),
      memberID: Joi.number().required(),
      memberName: Joi.string().required(),
      candidates: Joi.array().required()
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      name: Joi.string().required(),
      age: Joi.number().required(),
      skills: Joi.string().required(),
      intrests: Joi.string().required(),
      pastEvents: Joi.string().required(),
      completedProjects: Joi.string().required(),
      reviews: Joi.string().required(),
      certificates: Joi.string().required()
    };

    return Joi.validate(request, updateSchema);
  }
};
