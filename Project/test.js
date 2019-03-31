const funcs = require('./fn')

test('create location', async () => {
    const body = {
        name:"Abdullah",
        address : "kdduddd",
        city: "osdkjscb",
        country :"Reading",
        time :"2019/03/03",
        member : "2 projects",
        lifecoach : "3 review",
        confirmedLocation: false
      
    }
    await funcs.CreateLocation(body)
    const response = await funcs.GetAllLocation()
    expect(response.data.data[response.data.data.length-1]).toEqual(body)

});


test('update location ', async () => {
    const body = {
        name:"Abdullah",
        address : "kdduddd",
        city: "osdkjscb",
        country :"Reading",
        time :"2019/03/03",
        member : "2 projects",
        lifecoach : "3 review",
        confirmedLocation: true
      
    }
    const response = await funcs.GetAllLocation()
    const id =  response.data.data[response.data.data.length-1]._id
    await funcs.UpdateLocation(id,body)
    const response1= await funcs.GetAllLocation()
    expect(response1.data.data[response1.data.data.length-1]).toEqual(body)
});


test('delete location', async () => {
   
    const response = await funcs.GetAllLocation()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.DeleteLocation(id)
    const response1 = await funcs.GetAllLocation()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)

});

test('create schedule', async () => {
    const body = {
        "name":"Abdullah",
        "specification":"kdduddd",
        
    }
    const response1 = await funcs.GetAllLifecoach()
    const id = response1.data.data[response1.data.data.length-1]._id

    await funcs.CreateSchedule(id,body)
    const response = await funcs.GetAllSchedule()
    expect(response.data.data[response.data.data.length-1].name).toEqual(body.name)

});



test('delete schedule', async () => {
   
    const response = await funcs.GetAllSchedule()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.DeleteSchedule(id)
    const response1 = await funcs.GetAllSchedule    ()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)

});
test('update schedule', async () => {
    const body = {
        "name":"Abdullah",
        "specification":"kdduddd",
        
    }
    const response1 = await funcs.GetAllLifecoach()
    const id = response1.data.data[response1.data.data.length-1]._id

    await funcs.CreateSchedule(id,body)
    const response = await funcs.GetAllSchedule()
    expect(response.data.data[response.data.data.length-1].name).toEqual(body.name)
});
test('post appointment', async () => {
    const body = {
        memberID: 3,
        memberName: "Ahmed",
        confirm : "false",
      
    }
    const response2= await funcs.GetlifeCoach() 
    const id = response2.data.data[response2.data.data.length-1]._id
    await funcs.PostAppointment(id,body)
    const response = await funcs.GetAllAppointments()
    
    expect(response.data.data[response.data.data.length-1]).toEqual(body.memberName)
    
});

test('update appointment', async () => {
    const body = {
        memberID: 3,
        memberName: "Ahmed",
        confirm : "true",
        
      
    }
    const response = await funcs.GetAllAppointments()
    const id =  response.data.data[response.data.data.length-1]._id
    await funcs.UpdateAppointment(id,body)
    const response1= await funcs.GetAllAppointments()
    expect(response1.data.data[response1.data.data.length-1]).toEqual(body)
});

test('delete appointment', async () => {
    
    const response = await funcs.GetAllAppointments()
    const id =  response.data.data[response.data.data.length-1]._id
    await funcs.DeleteAppointment(id)
    const response1= await funcs.GetAllAppointments()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toMatchObject(id)
});
