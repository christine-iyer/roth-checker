const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

const router = express.Router()
const hardcodedData = [
  { symbol: "GOOGL", purchasePrice: 143.49,  shares: 100,  principalDate: '12/22/2021'  },
  { symbol: "TSLA", purchasePrice: 242.54, shares: 45,  principalDate: '11/27/2020'  },
  { symbol: "AMZN", purchasePrice: 160.00, shares: 80,  principalDate: '11/27/2020'  },
  { symbol: "BA", purchasePrice: 188.59, shares: 25,  principalDate: '12/14/2022'  },
  { symbol: "COIN", purchasePrice: 257.31, shares:50,  principalDate: '12/28/2021'  },
  { symbol: "AAPL", purchasePrice: 114.56, shares:200,  principalDate: ' 11/23/2020'  },
  { symbol: "CVS", purchasePrice: 89.83, shares: 25,  principalDate: '1/11/2023'  },
  { symbol: "GS", purchasePrice: 342.94, shares: 10,  principalDate: '1/24/2022'  },
  { symbol: "MS", purchasePrice: 98.39, shares: 25,  principalDate: '12/22/2021' },
  { symbol: "NVDA", purchasePrice: 293.75, shares: 5,  principalDate: '12/22/2021'  },
  { symbol: "PYPL", purchasePrice: 191.57, shares: 10,  principalDate: '12/22/2021'  },
  { symbol: "PFE", purchasePrice: 47.45, shares: 100,  principalDate: '11/10/2022'  },
  { symbol: "CRM", purchasePrice: 160.38, shares: 20,  principalDate: '10/21/2022'  },
  { symbol: "SBUX", purchasePrice: 102.99, shares: 25,  principalDate: '12/14/2022'  },
  { symbol: "DIS", purchasePrice: 151.93, shares: 10,  principalDate: '12/22/2021'  },
  { symbol: "VTI", purchasePrice: 239.05, shares: 10,  principalDate: '12/22/2021'  },
  { symbol: "LI", purchasePrice: 32.53, shares: 225,  principalDate: '11/13/2020'}
  
];
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,  'public')))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())
app.use('/api/portfolio', require('./routes/api/portfolio'))
app.get('/api/portfolio', (req, res) => {
  res.render('Today is ' + req.params.purchasePrice+' on ' +req.params.purchaseDate+ ' Today it is worth '+ req.params.regularMarketPrice)
})


// const options = {
//   method: 'GET',
//   url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
//   params: {
//     region: 'US',
//     symbols: 'GOOGL,TSLA,AMZN,BA,COIN,AAPL,CVS,GS,MS,NVDA,PYPL,PFE,CRM,SBUX,DIS,VIT,LI'
//   },
//   headers: {
//     'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
//     'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(JSON.stringify(response.data.quoteResponse.result.regularMarketPrice
//     ));
// }).catch(function (error) {
// 	console.error(error);
// });

app.listen(3008, function(){
     console.log('listening on 3008')
})