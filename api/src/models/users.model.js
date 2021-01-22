const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    username:String,
    password:String,
})

const users = mongoose.model('users', DataSchema)

module.exports = users