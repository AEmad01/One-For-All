const Joi = require('joi')

module.exports = {
    createValidation: request => {
        const createSchema = {
            location: Joi.array(),
            booked: Joi.boolean(),
            date: Joi.date().required(),
            appointment: Joi.array(),
            ScheduleID: Joi.string().required()

        }

        return Joi.validate(request, createSchema)
    },

    updateValidation: request => {
        const updateSchema = {
            location: Joi.array(),
            booked: Joi.boolean(),
            date: Joi.date(),
            appointment: Joi.array(),
            ScheduleID: Joi.string()

        }

        return Joi.validate(request, updateSchema)
    }, 
}
