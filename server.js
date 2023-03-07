const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
app.use('/api/portfolio', require('./controllers/routeController'))
app.get('/portfolio', (req, res) => {
  res.send('<h1>Hi<h1>')
})

app.listen(3008, function () {
  console.log('listening on 3008')
})