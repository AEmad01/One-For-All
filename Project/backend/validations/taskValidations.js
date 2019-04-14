const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string().required(),
      time: Joi.date(),
      effort: Joi.string(),
      levelOfCommitment: Joi.string(),
      experienceLevel: Joi.string(),
      partnerID: Joi.string(),
      partnerName: Joi.string(),
      monetaryCompensation: Joi.string(),
      consultency: Joi.string(),
      setOfSkills: Joi.array(),
      memberID: Joi.string(),
      memberName: Joi.string(),
      candidates: Joi.array(),
      negotiation:Joi.string(),
      Description: Joi.string().required()
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
        partnerID: Joi.string(),
        partnerName: Joi.string(),
        monetaryCompensation: Joi.string(),
        consultency: Joi.string(),
        setOfSkills: Joi.array(),
        memberID: Joi.number(),
        memberName: Joi.string(),
        candidates: Joi.array(),
        negotiation:Joi.string(),
        Description: Joi.string(),
        extraAtt:Joi.array()  
    };
    return Joi.validate(request, updateSchema);
  }
};
