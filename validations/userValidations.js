const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      username: Joi.string().required(),
      password: Joi.string().required(),
      type: Joi.string()
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
        username: Joi.string(),
        password: Joi.string(),
        type: Joi.string()
    };

    return Joi.validate(request, updateSchema);
  }
};
