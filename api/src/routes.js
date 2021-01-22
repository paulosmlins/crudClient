const express = require('express')
const users = require('./controllers/users.controllers')
const clients = require('./controllers/clients.controllers')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.json({message: 'ola'})
})

routes.post('/api/client/create', clients.create)
routes.get('/api/client', clients.index)
routes.get('/api/client/:_id', clients.details)
routes.delete('/api/client/:_id', clients.delete)
routes.put('/api/client/:_id', clients.edit)
routes.post('/api/login', users.login);

module.exports = routes 