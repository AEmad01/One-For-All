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