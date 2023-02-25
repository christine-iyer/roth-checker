const express = require('express')
const router = express.Router()
const app = express()

router.route('/api/portfolio').get(async function(req,res) {
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
       console.log(data)
     } catch (e) {
       console.error(e);
       return e.message
     }
     res.json = data
   })
// app.get('/', function(req,res){
//      res.send(`<h1>Haitch 1</h1>`)
// })
//app.use('/api/portfolio', require('./routes/api/portfolio'))
app.listen(3008, function(){
     console.log('listening on 3008')
})