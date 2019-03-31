const funcs = require('./fn')

test('adds an extra attribute to a task', async () =>{
    
    const taskID = '5ca0ec29e6d969466c46796d'
    const desc = 'czsdxfcgvhbd'
    const name = 'asga'
    expect.assertions(1)
    await funcs.addAtt(taskID,name,desc)    
    expect.assertions(1)
    const response =  await funcs.getTasks()
    expect(response.data.data[0].extraAtt[response.data.data[0].extraAtt.length-1]).toEqual(name + ': ' + desc)

});

test('choosing a applicant to be assigned to a task', async () => {

    const memberID = '5ca0e47db3f32c0de8a8c75c'
    const taskID = '5ca0ec29e6d969466c46796d'
    const name = 'Karim'
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

