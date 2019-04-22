const axios = require('axios');
const functions = {
    GetAllLocation: async () =>{
        const AllLocation = await axios.get('/api/lifecoach/GetAllLocation/')
        return AllLocation
    },
    GetSpecificLocation: async (id) =>{
        const Location = await axios.get('/api/lifecoach/GetAllLocation/'+id)
        return Location
    },

    CreateLocation: async (body) =>{
        const CreateLocation = await axios.post('/api/location/CreateLocation/', {
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
        const UpdateLocation = await axios.put('/api/location/UpdateLocation/'+id, {
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
        const location = await axios.delete('/api/lifecoach/DeleteLocation/'+id )
},
GetAllSchedule: async () =>{
    const AllSchedule = await axios.get('/api/schedules/GetAllSchedule/')
    return AllSchedule
},
GetSpecificSchedule: async (id) =>{
    const schedule = await axios.get('/api/schedules/GetSpecificSchedule/'+id)
    return schedule
},

CreateSchedule: async (id,body) =>{
    const schedule = await axios.post('/api/schedules/CreateSchedule/'+id,{
    "name":body.name,
    "specification":body.specification
})
},
UpdateSchedule: async (id,body) =>{
    const UpdateSchedule = await axios.put('/api/schedules/UpdateSchedule/'+id,{
    "name":body.name,
    "specification":body.specification
})
},
GetAllLifecoach: async () =>{
    const Lifecoach = await axios.get('/api/lifecoach/')
    return Lifecoach
},
DeleteSchedule: async (id) =>{
    const schedule = await axios.delete('/api/schedules/DeleteSchedule/'+id)
},



        postSlot: async (id,body) => {
            const slots = await axios.post('/api/slots/'+ id,{
                "date": body.date,
                // "booked":body.booked
            })
        },
        addAtt: async (i,n,d) => await axios.put('/api/partners/addAttribute/'+i,{

            attributeName: n,
            attributeDescription: d

        }),

        chooseApp: async (mid,tid,name) => await axios.put('/api/task//chooseApplication/'+ mid + '/' + tid, {

            candidateName: name
        
        }),
        addAttadmin: async (i,n,d) => {
            await axios.put('/api/task/addattributeAD/'+i,{

            name1: n,
            data1: d

        })},

        getTasks: async () => {
            const tasks = await axios.get('/api/task/')
            return tasks
        },
        postMember: async (body) => {
            const member = await axios.post('/api/members/createMember',{
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
            const members = await axios.get('/api/members/')
            return members
        },
        updatetask: async (tid,n,t,ef,loc,el,pid,pn,mc,con,set,mem,memname,can,neg,des,ex) => await axios.put('/api/task/updatetask/'+ tid, {
            name:n,
            time:t,
            effort:ef,
            levelOfCommitment:loc,
            experienceLevel:el,
            partnerID:pid,
            partnerName:pn,
            monetaryCompensation:mc,
            consultency: con,
            setOfSkills:set,
            memberID:mem,
            memberName:memname,
            candidates:can,
            negotiation:neg,
            Description:des,
            extraAtt:ex
        }),

        deleteTask: async (i) => {
            await axios.delete('/api/task/' + i)
        },
        getadmin: async () =>{
            const admins = await axios.get('/api/admin/')
            return admins
        },
        updateadmin: async (i,a) =>{
            await axios.put('/api/admin/updateadmin/'+i,{
                age:a
            })
            
        },
        deleteadmin: async(i)=>{
            await axios.delete('/api/admin/deleteAdmin/'+i)

        },
        AdminPostTask: async(i)=>{
            const task = await axios.post('/api/task/admin/'+i,{
                
                    "name":"my project 3",
                    "time":"12/12/2020",
                    "effort":"high",
                    "levelOfCommitment":"high",
                    "experienceLevel":"low",
                    "partnerID":"13243",
                    "partnerName":"yousef",
                    "monetaryCompensation":"fsdf",
                    "consultency":"hdbsvb",
                    "setOfSkills":["gusfg","fgdg"],
                    "memberID":"1432",
                    "memberName":"dsgdf",
                    "candidates":[],
                    "negotiation":"true",
                    "Description":"sfgyhsdg"
                    
            })
            
        },
    
        PostLifecoach: async (body) =>{
            const PostLifecoach = await axios.post('/api/lifecoach/', {
            "name" :body.name,
            "age" : body.age,
            "skills": body.skills,
            "intrests" : body.intrests,
            "pastEvents" : body.pastEvents,
            "completedProjects" : body.completedProjects,
            "reviews" : body.reviews,
            "certificates" : body.certificates,
            "specification" : body.specification,
            "salary" : body.salary
            
            })
           
        },
        GetAllLifecoach: async () =>{
            const Lifecoach = await axios.get('/api/lifecoach/')
            return Lifecoach
        },
        
        UpdateLifecoach: async (id,body) =>{
            const Lifecoach = await axios.put('/api/lifecoach/update/'+id, {
            "name" :body.name,
            "age" : body.age,
            "skills": body.skills,
            "intrests" : body.intrests,
            "pastEvents" : body.pastEvents,
            "completedProjects" : body.completedProjects,
            "reviews" : body.reviews,
            "certificates" : body.certificates,
            "specification" : body.specification,
            "salary" : body.salary
            
            })
           
        },

        DeleteLifecoach: async (id) =>{
            const Lifecoach = await axios.delete('/api/lifecoach/delete/'+id )
        },
        
        updateMember: async (id,body) => {
            const member = await axios.put('/api/members/update/'+ id,{
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
            const member = await axios.delete('/api/members/delete/'+ id)
        },
        PostAppointment: async (id,body) =>{
            const Appointment = await axios.post('/api/appointments'+id, {
            "memberID": body.memberID,
            "memberName" : body.memberName,
            "confirm" : body.confirm,
            
            })
           
        },
        
        
        UpdateAppointment: async (id,body) =>{
            const Appointment = await axios.put('/api/appointments/'+id, {
                "memberID": body.memberID,
                "memberName" : body.memberName,
                "confirm" : body.confirm,
                
            })
           
        },

        DeleteAppointment: async (id) =>{
            const Appointment = await axios.delete('/api/appointments/'+id )
    },
    GetAllAppointments: async () =>{
        const Appointment = await axios.get('/api/appointments/')
        return Appointment
    },
    GetlifeCoach: async()=>{
        const Lif = await axios.get("/api/lifecoach/")
        return Lif
    },
    
        postpartner: async (body) => {
            const partner = await axios.post('/api/partners/',{
                "name":body.name,
                "age": body.age,
               "username": body.username,
               "password":body.password,
               
            })
            
            
        }
            ,getpartners: async () => {
                const partner = await axios.get('/api/partners/')
                return partner
                }
                ,posttask: async (id,body) => {
                    const member = await axios.post('/api/task/partner/'+ id,{
                        "name":body.name, "time": body.time,
                         "effort":body.effort,
                         "levelOfCommitment":body.levelOfCommitment,
                         "experienceLevel":body.experienceLevel,
                         "partnerID":body.partnerID,
                         "partnerName":body.partnerName,
                         "monetaryCompensation":body.monetaryCompensation,
                         "consultency":body.consultency,
                         "setOfSkills":body.setOfSkills,
                         "memberID":body.memberID,
                         "memberName":body.memberName,
                          "candidates":body.candidates,
                          "Description": body.Description,
                          "negotiation":body.negotiation
                    })
                },
                updatepartner: async (id,body) => {
                    const partner = await axios.put('/api/partners/'+ id,{
                        "name":body.name,
                        "age": body.age,
                        "username": body.username,
                        "password": body.password
                    })
                },deletepartner: async (id) => {
                    const partner = await axios.delete('/api/partners/'+ id)
                },
}
module.exports = functions; 
