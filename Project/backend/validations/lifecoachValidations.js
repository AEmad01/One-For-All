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
            salary: Joi.number().required(),
            Notification: Joi.array()
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            name: Joi.string(),
            age: Joi.number(),
            skills: Joi.string(),
            intrests: Joi.string(),
            pastEvents: Joi.string(),
            completedProjects: Joi.string(),
            reviews: Joi.string(),
            certificates: Joi.string(),
            specification: Joi.string(),
            salary: Joi.number(),
            Notification: Joi.array()

        }

        return Joi.validate(request, updateSchema)
    }, 
}