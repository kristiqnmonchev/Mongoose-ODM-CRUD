const mongoose = require('mongoose');

const personaSchema = new mongoose.Schema({
    name: {type: String, require: true, minLength: 3},
    age: {type: Number, enum: [5, 10 ,15]},
})

const Person = mongoose.model('Person', personaSchema);

module.exports = Person;