const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            memberID: Joi.number().required(),
            memberName: Joi.string().required(),
            confirm: Joi.string().required()   
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            memberID: Joi.number().required(),
            memberName: Joi.string().required(),
            confirm: Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}