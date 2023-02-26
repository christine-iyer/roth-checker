const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const router = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.static)
console.log('before')
app.use('/api/portfolio', require('./routes/api/portfolio'))

router.route('/api/portfolio').get(async function(req,res) {
  console.log("hi")
     try {
       const response = await fetch('https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI', {
         method: "GET",
         headers: {
           'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
           'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
         }
       })
       const data = await response.json()
       //res.locals.data.quoteResponse.results = data.quoteResponse.results
       console.log(data.quoteResponse)
     } catch (e) {
       console.error(e);
       return e.message
     }
     res.json(data.quoteResponse)
   })
// app.get('/', function(req,res){
//      res.send(`<h1>Haitch 1</h1>`)
// })

app.listen(3008, function(){
     console.log('listening on 3008')
})