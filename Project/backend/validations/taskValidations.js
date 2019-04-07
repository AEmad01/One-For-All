const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string().required(),
      time: Joi.date().required(),
      effort: Joi.string().required(),
      levelOfCommitment: Joi.string().required(),
      experienceLevel: Joi.string().required(),
      partnerID: Joi.number().required(),
      partnerName: Joi.string().required(),
      monetaryCompensation: Joi.string().required(),
      consultency: Joi.string().required(),
      setOfSkills: Joi.array().required(),
      memberID: Joi.string().required(),
      memberName: Joi.string().required(),
      candidates: Joi.array().required(),
      negotiation:Joi.string().required(),
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
        partnerID: Joi.number(),
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
