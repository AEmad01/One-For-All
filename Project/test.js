const funcs = require('./fn')

test('adds an extra attribute to a task', async () =>{
    
    const taskID = '5c9cdf21c2343413bf99fcfc'
    const desc = 'asdsgsagsagas'
    const name = 'asga'
    expect.assertions(1)
    await funcs.addAtt(taskID,name,desc)    
    expect.assertions(1)
    const response =  await funcs.getTasks()
    expect(response.data.data[0].extraAtt[response.data.data[0].extraAtt.length-1]).toEqual(name + ': ' + desc)

});

test('choosing a applicant to be assigned to a task', async () => {

    const memberID = '5c9cceb2a2f2670e9fee71a3'
    const taskID = '5c9cdf21c2343413bf99fcfc'
    const name = 'asdasdasd'
    await funcs.chooseApp(memberID,taskID,name)
    expect.assertions(2)
    const response = await funcs.getTasks()
    expect(response.data.data[0].memberID).toEqual(memberID)
    expect(response.data.data[0].memberName).toEqual(name)

});
test('post member', async () => {
    const body = {
        name :"kimokono",
        age : 27,
        skills :"lecturing",
        intrests : "Architecture",
        pastEvents: "pastEvents",
        completedProjects :"GNB HQ",
        reviews :"reviews",
        certificates:"GUC"
    }
    await funcs.postMember(body)
    const response = await funcs.getmember()
    expect(response.data.data[response.data.data.length-1].name).toEqual(body.name)

});

test('post lifecoach', async () => {
    const body = {
        name:"karim",
        age : 21,
        skills: "osdkjscb",
        intrests :"Reading",
        pastEvents :"Match",
        completedProjects : "2 projects",
        reviews : "3 review",
        certificates : "5 cert",
        specification : "tech",
        salary : 10000
      
    }
    await funcs.PostLifecoach(body)
    const response = await funcs.GetAllLifecoach()
    expect(response.data.data[response.data.data.length-1]).toMatchObject(body)

});

test('update lifecoach', async () => {
    const body = {
        name:"ahmed",
        age : 21,
        skills: "osdkjscb",
        intrests :"Reading",
        pastEvents :"Match",
        completedProjects : "2 projects",
        reviews : "3 review",
        certificates : "5 cert",
        specification : "tech",
        salary : 10000
      
    }
    const response = await funcs.GetAllLifecoach()
    const id =  response.data.data[response.data.data.length-1]._id
    await funcs.UpdateLifecoach(id,body)
    const response1= await funcs.GetAllLifecoach()
    expect(response1.data.data[response1.data.data.length-1]).toMatchObject(body)
});



test('delete lifecoach', async () => {
    
    const response = await funcs.GetAllLifecoach()
    const id =  response.data.data[response.data.data.length-1]._id
    await funcs.DeleteLifecoach(id)
    const response1= await funcs.GetAllLifecoach()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)
});

