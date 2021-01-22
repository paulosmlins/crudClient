const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./src/routes')
const urlDB = require('./src/keydb')

const app = express();
const port = process.env.PORT || 4000

mongoose.connect(urlDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Tamo no banco');
    }
})

app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.use(routes)

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})
