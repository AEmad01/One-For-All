const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            specification: Joi.string().required(),
            
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string().required(),
            specification: Joi.string().required(),
            
        }

        return Joi.validate(request, updateSchema)
    }, 
}