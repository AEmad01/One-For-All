const axios = require('axios');
const functions = {

        addAtt: async (i,n,d) => await axios.put('http://localhost:3000/api/partners/addAttribute/'+i,{

            attributeName: n,
            attributeDescription: d

        }),

        chooseApp: async (mid,tid,name) => await axios.put('http://localhost:3000/api/task//chooseApplication/'+ mid + '/' + tid, {

            candidateName: name
        
        }),
        addAttadmin: async (i,n,d) => {
            await axios.put('http://localhost:3000/api/task/addattributeAD/'+i,{

            name1: n,
            data1: d

        })},

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
        updatetask: async (tid,n,t,ef,loc,el,pid,pn,mc,con,set,mem,memname,can,neg,des,ex) => await axios.put('http://localhost:3000/api/task/updatetask/'+ tid, {
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
            await axios.delete('http://localhost:3000/api/task/' + i)
        }
    }
module.exports = functions; 