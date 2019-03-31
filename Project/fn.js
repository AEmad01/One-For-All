const axios = require('axios');
const functions = {
<<<<<<< HEAD
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
}
;
=======

        addAtt: async (i,n,d) => await axios.put('http://localhost:3000/api/partners/addAttribute/'+i,{

            attributeName: n,
            attributeDescription: d

        }),

        chooseApp: async (mid,tid,name) => await axios.put('http://localhost:3000/api/task//chooseApplication/'+ mid + '/' + tid, {

            candidateName: name
        
        }),

        getTasks: async () => {
            const tasks = await axios.get('http://localhost:3000/api/task/')
            return tasks
        },
        postMember: async (body) => {
            const member = await axios.post('http://localhost:3000/api/members/',{
                "name":body.name,
                "age": body.age,
                "skills": body.skills,
                "intrests":body.intrests,
                "pastEvents":body.pastEvents,
                "completedProjects":body.completedProjects,
                "reviews": body.reviews, 
                "certificates": body.certificates
            })
        },
        getmember: async () => {
            const members = await axios.get('http://localhost:3000/api/members/')
            return members
        },
        updateMember: async (id,body) => {
            const member = await axios.put('http://localhost:3000/api/members/'+ id,{
                "name":body.name,
                "age": body.age,
                "skills": body.skills,
                "intrests":body.intrests,
                "pastEvents":body.pastEvents,
                "completedProjects":body.completedProjects,
                "reviews": body.reviews, 
                "certificates": body.certificates
            })
        },
    }
module.exports = functions; 
>>>>>>> c315ac0b25123e9872fed3d63403937acad0ad5f
