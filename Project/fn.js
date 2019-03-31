const axios = require('axios');

const functions = {
    

        getSlots: async () => {
            const slots = await axios.get('http://localhost:3000/api/slots/getslots')
            return slots
        },
        getSch: async () => {
            const sch = await axios.get('http://localhost:3000/api/schedules/getAllSchedule')
            return sch
        },
        deleteSlot: async (id) => {
            const slot = await axios.get('http://localhost:3000/api/slots/'+id)
        },
        updateSlot: async (id,body) => {
            const slot = await axios.get('http://localhost:3000/api/slots/pick'+id,{
            "date": body.date,
            "booked": body.booked

        })
    },
        postSlot: async (id,body) => {
            const slots = await axios.post('http://localhost:3000/api/slots/'+ id,{
                "date": body.date,
                // "booked":body.booked
            })
        },
    }
module.exports = functions; 
