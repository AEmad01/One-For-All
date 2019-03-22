const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            name: Joi.string().min(3).max(500).required(),
            age: Joi.number().min(50).max(3000).required(),
            skills: Joi.number().min(50).max(3000).required(),
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
            name: Joi.string().min(3).max(500).required(),
            age: Joi.number().min(50).max(3000).required(),
            skills: Joi.number().min(50).max(3000).required(),
            intrests: Joi.string().required(),
            pastEvents: Joi.string().required(),
            completedProjects: Joi.string().required(),
            reviews: Joi.string().required(),
            certificates: Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}