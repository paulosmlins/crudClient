const clients = require('../models/clients.model')


module.exports = {
    async index(req, res) {
        const client = await clients.find()
        return res.json(client)
    },
    async create(req, res) {
        const {nome, email, telefone, cep, endereco, bairro, cidade, uf} = req.body
        
        let data = {}

        let client = await clients.findOne({email}).exec()
        if (!client){
            data = {nome, email, telefone, cep, endereco, bairro, cidade, uf}
            client = await clients.create(data)
            return res.status(201).json(client)
        }else {
            return res.status(409).json(client) 
        }
    },
    async details(req, res) {
        const {_id} = req.params
        const client = await clients.findOne({_id})
        return res.json(client)
    },
    async delete(req, res) {
        const {_id} = req.params
        const client = await clients.findByIdAndDelete({_id})
        return res.json(client)
    },
    async edit(req, res) {
        const { _id, nome, email, telefone, cep, endereco, bairro, cidade, uf} = req.body
        let data = {nome, email, telefone, cep, endereco, bairro, cidade, uf}
        const client = await clients.findByIdAndUpdate({_id}, data, {new:true})
        return res.json(client)
    }
}