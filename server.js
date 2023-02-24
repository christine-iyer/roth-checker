const express = require('express')
const router = require('express').Router()
const app = express()

app.get('/', function(req,res){
     res.send(`<h1>Haitch 1</h1>`)
})
app.use('/api/portfolio', require('./routes/api/portfolio'))
app.listen(3008, function(){
     console.log('listening on 3008')
})