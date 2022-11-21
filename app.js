const express = require('express');
const app = express()

//const conn_db = require('./models/db')

//app.use(express.static(__dirname + '/SERIADOS'))

app.get("/alisson", async(req, res) => {
    //res.sendFile(__dirname + '/alisson-full.m3u')
    res.redirect('**')
})

app.get("/junior", async(req, res) => {
    //res.sendFile(__dirname + '/alisson-full.m3u')
    res.redirect('**')
})

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001: http://localhost:3001")
    console.log("Para derrubar o servidor digite: ctrl + c")
})

//Para roda o servidor com o nodemon
// user o comando nodemon app.js
