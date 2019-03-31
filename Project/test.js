const funcs = require('./fn')
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

