const axios = require('axios');
const functions = {
    GetAllSchedule: async (body) =>{
        const AllSchedule = await axios.get('http://localhost:3000/GetAllSchedule', body)
        return AllSchedule
    },
    GetSpecificSchedule: async (id) =>{
        const schedule = await axios.get(`http://localhost:3000/GetSpecificSchedule/${id}`)
        return schedule
    },

    CreateSchedule: async (body) =>{
        const schedule = await axios.post('http://localhost:3000/CreateSchedule',body)
        return schedule
    },
    UpdateSchedule: async (id) =>{
        const schedule = await axios.put(`http://localhost:3000/UpdateSchedule/${id}`)
        return schedule
    },
    DeleteSchedule: async (id) =>{
        const Allschedule = await axios.delete(`http://localhost:3000/DeleteSchedule/${id}`)
        return Allschedule
    },
    AcceptBooking: async (id) =>{
        const appointments = await axios.put(`http://localhost:3000/booking/${id}`)
        return appointments
    }
};