const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            specification: Joi.string().required(),
            slots: Joi.string(),
            lifeCoachID: Joi.string()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string(),
            specification: Joi.string(),
            slots: Joi.string(),
            lifeCoachID: Joi.string()


        }

        return Joi.validate(request, updateSchema)
    }, 
}