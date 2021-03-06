const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            username: Joi.string().required(),
            password: Joi.string().required(),
            name: Joi.string().required(),
            age: Joi.number().required(),
            skills: Joi.string().required(),
            intrests: Joi.string().required(),
            pastEvents: Joi.string().required(),
            completedProjects: Joi.string().required(),
            reviews: Joi.string().required(),
            certificates: Joi.string().required()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            username: Joi.string(),
            password: Joi.string(),
            name: Joi.string(),
            age: Joi.number(),
            skills: Joi.string(),
            intrests: Joi.string(),
            pastEvents: Joi.string(),
            completedProjects: Joi.string(),
            reviews: Joi.string(),
            certificates: Joi.string()
        }

        return Joi.validate(request, updateSchema)
    }, 
}