const funcs = require('./fn')

test('post slot', async () => {
    const body = {
        date : "2019-03-02T22:00:00.000Z",
    }
    const response = await funcs.getSch()
    const id = response.data.data[response.data.data.length-1]._id

    await funcs.postSlot(id,body)
    const response1 = await funcs.getSlots()
    console.log(response1.data.data[response1.data.data.length-1])
    expect(response1.data.data[response1.data.data.length-1].date).toEqual(body.date)

});


test('delete slot', async () => {
   
    const response = await funcs.getSlots()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.deleteSlot(id)
    const response1 = await funcs.getSlots()
    expect(response1.data.data[response1.data.data.length-1]._id).not.toEqual(id)

});

test('update slot', async () => {
    const body = {
        date:"2019-03-02T22:00:00.000Z",
        booked:"true"

    }
    const response = await funcs.getSlots()
    const id = response.data.data[response.data.data.length-1]._id
    await funcs.updateSlot(id,body)
    const response1 = await funcs.getSlots()
    expect(response1.data.data[response1.data.data.length-1].booked).toMatchObject(body.booked)

});

