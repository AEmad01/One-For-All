const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().required(),
            age: Joi.number().required(),
            skills: Joi.string().required(),
            intrests: Joi.string().required(),
            pastEvents: Joi.string().required(),
            completedProjects: Joi.string().required(),
            reviews: Joi.string().required(),
            certificates: Joi.string().required(),
            specification: Joi.string().required(),
            salary: Joi.number().required()
        }

        return Joi.validate(request, createSchema)
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
            certificates: Joi.string().required(),
            specification: Joi.string().required(),
            salary: Joi.number().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}