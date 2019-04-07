const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            location: Joi.array(),
            booked: Joi.boolean(),
            date: Joi.date().required(),
            appointment: Joi.array()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            location: Joi.array(),
            booked: Joi.boolean(),
            date: Joi.date().required(),
            appointment: Joi.array()

        }

        return Joi.validate(request, updateSchema)
    }, 
}
