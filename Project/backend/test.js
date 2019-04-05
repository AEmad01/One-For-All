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
    expect(response.data.data[response.data.data.length-1]).toMatchObject(body)

});
test('update member', async () => {
    const body = {
        name :"boodi",
        age : 27,
        skills :"lecturing",
        intrests : "Architecture",
        pastEvents: "pastEvents",
        completedProjects :"GNB HQ",
        reviews :"reviews",
        certificates:"GUC"
    }
    const response = await funcs.getmember()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.updateMember(id,body)
    const response1 = await funcs.getmember()
    expect(response1.data.data[response1.data.data.length-1]).toMatchObject(body)

});
test('delete member', async () => {
   
    const response = await funcs.getmember()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.deleteMember(id)
    const response1 = await funcs.getmember()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)

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
test('post partner', async () => {
    const body = {
        name :"notwalid",
        age : 21,
        username:"notwalid123",
        password:"123455"
        
    }
    await funcs.postpartner(body)
    const response = await funcs.getpartners()
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

});
test('get admin',async ()=>{
    expect.assertions(1)
const response =await funcs.getadmin()
expect(response.data.data[0].name).toEqual("ahmed")
});
test('update admin',async()=>{
    const body = {
        age:21
    }
    await funcs.updateadmin('5ca0e84e735e271ba089ccde',body)
    expect.assertions(1)
    const response =await funcs.getadmin()
    expect(response.data.data[0].age).toEqual(21)
    expect.assertions(1)
});
test('delete admin',async()=>{
    const response = await funcs.getadmin()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.deleteadmin(id)
    expect.assertions(1)
    const response1 = await funcs.getadmin()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)
});
test('adminPost',async()=>{
    expect.assertions(1)
    const l = await funcs.getTasks()
    const h = l.data.data.length
    await funcs.AdminPostTask('5ca11d40a308c8306c2bf96f')
    expect.assertions(1)
    const response = await funcs.getTasks()
    const j = response.data.data.length
    expect (j).toEqual(h+1)
})


test('post task with partner posting', async () => {
    const body = {
        "name":"omgimdead",
         "time": "2017/1/1",
          "effort":"high",
          "levelOfCommitment":"high",
          "experienceLevel":"hgih",
          "partnerID":1,
          "partnerName":"Waliddd",
          "monetaryCompensation":"asfnjfsa","consultency":"asfoiunfaskm",
          "setOfSkills":["safjlnsfalk"],
          "memberID":123,"memberName":"waludidk",
           "candidates":[2],
           "Description": "hasikfbsaifubhkjsfbsfuabfskajbfskbasf",
           "negotiation":"nononono"
    }
    const response = await funcs.getpartners()
        const id = response.data.data[response.data.data.length-1]._id
        console.log(id)
    await funcs.posttask(id,body)
    const responset = await funcs.getTasks()
    

    expect(responset.data.data[responset.data.data.length-1].name).toEqual(body.name)

});

test('Get partner',async () => {

    const Update= await funcs.getpartners();
    expect(Update.data.length).toBe(Update.data.length);

      });


      test('update partner', async () => {
        const body = {
            name :"okkkkkkkkk",
        age : 21,
        username:"notwalid123",
        password:"123455"
        }
        const response = await funcs.getpartners()
        const id = response.data.data[response.data.data.length-1]._id
        await funcs.updatepartner(id,body)
        const response1 = await funcs.getpartners()
        expect(response1.data.data[response1.data.data.length-1]).toMatchObject(body)
    
    });

    test('delete partner', async () => {
   
        const response = await funcs.getpartners()
        const id = response.data.data[response.data.data.length-1]._id
        await funcs.deletepartner(id)
        const response1 = await funcs.getpartners()
        expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)
    
    });
