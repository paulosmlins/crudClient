const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const users = require('../models/users.model')

module.exports = {
    index(req, res) {
        res.json({ message: 'ola, chegamos ate aqui' })
    },
    login(req, res) {
        const {username, password} = req.body

        let data = {}

        let user = users.findOne({username: req.body.username}, (err, user) => {
            if (err){
                console.log(err)
            }else{
                if (user){
                    if (user.username === 'admin' && bcrypt.compareSync(req.body.password, user.password)){
                        return res.status(200).json({logado:true})
                    }
                    else{
                        return res.status(401).json({logado:false})
                    }
                }
                else{
                    return res.status(401).json({user:false})
                }
            }
        })
    }
}