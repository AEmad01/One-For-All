const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            location: Joi.string().required(),
            slot: Joi.date().required(),
            lifeCoachID: Joi.number().required(),
            lifeCoachName: Joi.string().required(),
            memberID: Joi.number().required(),
            memberName: Joi.string().required(),
            confirm: Joi.string().required()   
        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            location: Joi.string().required(),
            slot: Joi.date().required(),
            lifeCoachID: Joi.number().required(),
            lifeCoachName: Joi.string().required(),
            memberID: Joi.number().required(),
            memberName: Joi.string().required(),
            confirm: Joi.string().required()
        }

        return Joi.validate(request, updateSchema)
    }, 
}