const axios = require('axios');
const functions = {
    GetAllLocation: async () =>{
        const AllLocation = await axios.get('http://localhost:3000/api/lifecoach/GetAllLocation/')
        return AllLocation
    },
    GetSpecificLocation: async (id) =>{
        const Location = await axios.get('http://localhost:3000/api/lifecoach/GetAllLocation/'+id)
        return Location
    },

    CreateLocation: async (body) =>{
        const CreateLocation = await axios.post('http://localhost:3000/api/location/CreateLocation/', {
        "name" :body.name,
        "address" : body.address,
        "city": body.city,
        "country" : body.country,
        "time" : body.time,
        "member" : body.member,
        "lifecoach" : body.lifecoach,
        "confirmedLocation" : body.confirmedLocation
        
        })
       
    },
<<<<<<< HEAD
    
    
    UpdateLocation: async (id,body) =>{
        const UpdateLocation = await axios.put('http://localhost:3000/api/location/UpdateLocation/'+id, {
            "name" :body.name,
            "address" : body.address,
            "city": body.city,
            "country" : body.country,
            "time" : body.time,
            "member" : body.member,
            "lifecoach" : body.lifecoach,
            "confirmedLocation" : body.confirmedLocation
            
        })
       
    },

    DeleteLocation: async (id) =>{
        const location = await axios.delete('http://localhost:3000/api/lifecoach/DeleteLocation/'+id )
},
GetAllSchedule: async () =>{
    const AllSchedule = await axios.get('http://localhost:3000/api/schedules/GetAllSchedule/')
    return AllSchedule
},
GetSpecificSchedule: async (id) =>{
    const schedule = await axios.get('http://localhost:3000/api/schedules/GetSpecificSchedule/'+id)
    return schedule
},

CreateSchedule: async (id,body) =>{
    const schedule = await axios.post('http://localhost:3000/api/schedules/CreateSchedule/'+id,{
    "name":body.name,
    "specification":body.specification
})
},
UpdateSchedule: async (id,body) =>{
    const UpdateSchedule = await axios.put('http://localhost:3000/api/schedules/UpdateSchedule/'+id,{
    "name":body.name,
    "specification":body.specification
})
},
GetAllLifecoach: async () =>{
    const Lifecoach = await axios.get('http://localhost:3000/api/lifecoach/')
    return Lifecoach
},
DeleteSchedule: async (id) =>{
    const schedule = await axios.delete('http://localhost:3000/api/schedules/DeleteSchedule/'+id)
},


}
module.exports = functions;
=======
        postSlot: async (id,body) => {
            const slots = await axios.post('http://localhost:3000/api/slots/'+ id,{
                "date": body.date,
                // "booked":body.booked
            })
        },
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
        deleteMember: async (id) => {
            const member = await axios.delete('http://localhost:3000/api/members/'+ id)
        },
        PostAppointment: async (id,body) =>{
            const Appointment = await axios.post('http://localhost:3000/api/appointments'+id, {
            "memberID": body.memberID,
            "memberName" : body.memberName,
            "confirm" : body.confirm,
            
            })
           
        },
        
        
        UpdateAppointment: async (id,body) =>{
            const Appointment = await axios.put('http://localhost:3000/api/appointments/'+id, {
                "memberID": body.memberID,
                "memberName" : body.memberName,
                "confirm" : body.confirm,
                
            })
           
        },

        DeleteAppointment: async (id) =>{
            const Appointment = await axios.delete('http://localhost:3000/api/appointments/'+id )
    },
    GetAllAppointments: async () =>{
        const Appointment = await axios.get('http://localhost:3000/api/appointments/')
        return Appointment
    },
    GetlifeCoach: async()=>{
        const Lif = await axios.get("http://localhost:3000/api/lifecoach/")
        return Lif
    }
    }
module.exports = functions; 
>>>>>>> 4784c23f257a9d38914b097c18aca596eef16277
