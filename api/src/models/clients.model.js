const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    nome:String,
    email:String,
    telefone:Number,
    cep:Number,
    endereco:String,
    bairro:String,
    cidade:String,
    uf:String,
})

const clients = mongoose.model('clients', DataSchema)

module.exports = clients