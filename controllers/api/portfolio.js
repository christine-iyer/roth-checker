require('dotenv').config()
const express = require('express')
const router = require('express').Router()

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


const getResults = async () => {
  try {
    const response = await fetch('https://yh-finance.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=GOOGL%2CAMZN%2CAAPL%2CBA%2CCOIN%2CCVS%2CGS%2CMS%2CNVDA%2CPYPL%2CPFE%2CCRM%2CSBUX%2CTSLA%2CDIS%2CVTI%2CLI', {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
        'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
      }
    })
    const data = await response.json()
    res.locals.data.quoteResponse.results = data.quoteResponse.results
    console.log(res.locals.data.quoteResponse.results)
  } catch (e) {
    console.error(e);
    return e.message
  }
  res.json = data
}





async function index(req, res) {
  try {

    const result = response => {
      const mergedData = [...Asset, ...data]
      res.json(mergedData)
      console.log(mergedData)
    }
    return mergedData
  }
  catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  getResults,
  index
};

