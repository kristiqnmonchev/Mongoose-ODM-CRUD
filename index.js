const mongoose = require('mongoose');
const Cat = require('./models/Cat')
const Person = require('./models/Person')

async function connectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/myFirstDataBase')

    // newCat.save((err, cat) => {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log('User saver')
    // })


    // READ
    // const cats = await Cat.findById('64e3c112339a9d101fcd62b4');
    // const cats = await Cat.find();
    // const cats = await Cat.findOne({age: 15});

    // CREATE 
    // const newCat = new Cat({
    //     name: 'John',
    //     age: 15,
    //     breed: 'Angora'
    // })
    // newCat.save();

    // const newCat = await Cat.create({
    //     name: 'sheila',
    //     breed: 'kuche'
    // })

    // UPDATE
    // const sheila = await Cat.findOne({name: 'sheila'})
    // sheila.age = 10;
    // await sheila.save()
    //native mongodb
    // await Cat.updateOne({name: 'sheila'}, {$set: {age: 9}})
    // await Cat.findOneAndUpdate({name: 'sheila'}, {$set: {age: 10}})
    // console.log(sheila)

    // DELETE
    // await Cat.deleteOne({name: 'Garry'})
    // await Cat.findByIdAndDelete('64e3cade8588b105857e4a20') 


    // CREATE NEW COLLECTION
    // const newPerson = await Person.create({
    //     name: 'Eli',
    //     age: 5,
    // })

    const person = await Person.findById('64e3d73a25025f8762f4e8d1')
    console.log(person)


}

connectDb()