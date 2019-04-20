const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            location: Joi.string(),
            slot: Joi.string(),
            lifeCoachID:Joi.string(),
            lifeCoachName:Joi.string(),
            memberID:Joi.string().required(),
            memberName:Joi.string().required(),
           

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            location: Joi.string(),
            slot: Joi.string(),
            lifeCoachID:Joi.string(),
            lifeCoachName:Joi.string(),
            memberID:Joi.string(),
            memberName:Joi.string(),
            confirm:Joi.boolean(),
            confirmSlot:Joi.boolean()
        }

        return Joi.validate(request, updateSchema)
    }, 
}