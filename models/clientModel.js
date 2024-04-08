const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    gender: String,
    age: Number
});

const client = mongoose.model('client', clientSchema);

module.exports = client;