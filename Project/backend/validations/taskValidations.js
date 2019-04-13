const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string().required(),
      time: Joi.date(),
      effort: Joi.string(),
      levelOfCommitment: Joi.string(),
      experienceLevel: Joi.string(),
      partnerID: Joi.number(),
      partnerName: Joi.string(),
      monetaryCompensation: Joi.string(),
      consultency: Joi.string(),
      setOfSkills: Joi.array(),
      memberID: Joi.string(),
      memberName: Joi.string(),
      candidates: Joi.array(),
      Description: Joi.string().required(),
      Status:Joi.boolean()
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
        name: Joi.string(),
        time: Joi.date(),
        effort: Joi.string(),
        levelOfCommitment: Joi.string(),
        experienceLevel: Joi.string(),
        partnerID: Joi.number(),
        partnerName: Joi.string(),
        monetaryCompensation: Joi.string(),
        consultency: Joi.string(),
        setOfSkills: Joi.array(),
        memberID: Joi.number(),
        memberName: Joi.string(),
        candidates: Joi.array(),
        Description: Joi.string(),
        extraAtt:Joi.array(),
        Status:Joi.boolean()
        
    };

    return Joi.validate(request, updateSchema);
  }
};
