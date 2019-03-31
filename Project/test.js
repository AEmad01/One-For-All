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
test('updating  task', async () => {
    
    const taskID = '5ca0ec29e6d969466c46796d'
     const name = "medhat5"
     const levelOfCommitment="high"
     const time="2016-12-31T22:00:00.000Z"
     const experienceLevel="high"
     const effort="fff"
     const partnerID=45
     const partnerName="cvds"
     const monetaryCompensation="svd"
     const consultency="veve"
     const setOfSkills=["dfd"]
     const memberID="34"
     const memberName="edfjew"
     const candidates =["cd"]
     const negotiation="ve"
     const Description="vfebvebvervrvevveevre"
     const extraAtt=["fve"]
 
     
     await funcs.updatetask(taskID,name,time,effort,levelOfCommitment,experienceLevel,partnerID,partnerName,monetaryCompensation,consultency,setOfSkills,memberID,memberName,candidates,negotiation,Description,extraAtt)
     expect.assertions(17)
     const response = await funcs.getTasks()
     expect(response.data.data[0].name).toEqual(name)
     expect(response.data.data[0].levelOfCommitment).toEqual(levelOfCommitment)
     expect(response.data.data[0].experienceLevel).toEqual(experienceLevel)
     expect(response.data.data[0].name).toEqual(name)
     expect(response.data.data[0].effort).toEqual(effort)
     expect(response.data.data[0].partnerID).toEqual(partnerID)
     expect(response.data.data[0].time).toEqual(time)
     expect(response.data.data[0].partnerName).toEqual(partnerName)
     expect(response.data.data[0].monetaryCompensation).toEqual(monetaryCompensation)
     expect(response.data.data[0].consultency).toEqual(consultency)
     expect(response.data.data[0].setOfSkills).toEqual(setOfSkills)
     expect(response.data.data[0].memberID).toEqual(memberID)
     expect(response.data.data[0].memberName).toEqual(memberName)
     expect(response.data.data[0].candidates).toEqual(candidates)
     expect(response.data.data[0].negotiation).toEqual(negotiation)
     expect(response.data.data[0].Description).toEqual(Description)
     expect(response.data.data[0].extraAtt).toEqual(extraAtt)
   
     
     
 
 });
 test('admin adds an extra attribute to a task', async () =>{
    
    const taskID = '5ca0ec29e6d969466c46796d'
    const desc = 'czsdxfcgvhbd'
    const name = 'asga'
    expect.assertions(1)
    await funcs.addAttadmin(taskID,name,desc)    
    expect.assertions(1)
    const response =  await funcs.getTasks()
    expect(response.data.data[0].extraAtt[response.data.data[0].extraAtt.length-1]).toEqual(name + ':' + desc)

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

test('reads tasks', async () => {

    expect.assertions(1)
    const response = await funcs.getTasks()
    expect(response.data.data[0]._id).toEqual('5ca0ec29e6d969466c46796d')

});

test('delete a task', async () => {

    const r1 = await funcs.getTasks()
    const length1 = r1.data.data.length
    const taskID = r1.data.data[length1-1]._id
    await funcs.deleteTask(taskID)
    const r2 = await funcs.getTasks()
    const length2 = r2.data.data.length
    expect(length1).toEqual(length2+1)

})


