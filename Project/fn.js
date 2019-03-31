const axios = require('axios');
const functions = {

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
        PostLifecoach: async (body) =>{
            const PostLifecoach = await axios.post('http://localhost:3000/api/lifecoach/', {
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
            const Lifecoach = await axios.get('http://localhost:3000/api/lifecoach/')
            return Lifecoach
        },
        
        UpdateLifecoach: async (id,body) =>{
            const Lifecoach = await axios.put('http://localhost:3000/api/lifecoach/'+id, {
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
            const Lifecoach = await axios.delete('http://localhost:3000/api/lifecoach/'+id )
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
}
module.exports = functions; 