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
        postMember: async () => {
            const member = await axios.post('http://localhost:3000/api/members/',{
                "name":"willy","age":27,"skills":"lecturing","intrests":"Architecture","pastEvents":"pastEvents","completedProjects":"GNB HQ","reviews":"reviews","certificates":"GUC"
            })
        },
        getmember: async () => {
            const members = await axios.get('http://localhost:3000/api/members/')
            return members
        },
    }
module.exports = functions; 