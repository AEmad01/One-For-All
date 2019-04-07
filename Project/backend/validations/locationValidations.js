const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            address: Joi.string().required(),
            city: Joi.string().required(),
            country: Joi.string().required(),
            time: Joi.string().required(),
            member: Joi.string().required(),
            lifecoach: Joi.string().required(),
            confirmedLocation: Joi.boolean(),


        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string(),
            address: Joi.string(),
            city: Joi.string(),
            country: Joi.string(),
            time: Joi.string(),
            member: Joi.string(),
            lifecoach: Joi.string(),
            confirmedLocation: Joi.boolean(),


        }

        return Joi.validate(request, updateSchema)
    }, 
}