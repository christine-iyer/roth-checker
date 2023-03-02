require('dotenv').config()
const express = require('express')

const axios = require("axios");

const hardcodedData = [
  { symbol: "GOOGL", purchasePrice: 143.49, shares: 100, principalDate: '12/22/2021', exchangeName: 'NasdaqGS' },
  { symbol: "TSLA", purchasePrice: 242.54, shares: 45, principalDate: '11/27/2020', exchangeName: 'NasdaqGS' },
  { symbol: "AMZN", purchasePrice: 160.00, shares: 80, principalDate: '11/27/2020', exchangeName: 'NasdaqGS' },
  { symbol: "BA", purchasePrice: 188.59, shares: 25, principalDate: '12/14/2022', exchangeName: 'NYSE' },
  { symbol: "COIN", purchasePrice: 257.31, shares: 50, principalDate: '12/28/2021', exchangeName: 'NasdaqGS' },
  { symbol: "AAPL", purchasePrice: 114.56, shares: 200, principalDate: ' 11/23/2020', exchangeName: 'NasdaqGS' },
  { symbol: "CVS", purchasePrice: 89.83, shares: 25, principalDate: '1/11/2023', exchangeName: 'NYSE' },
  { symbol: "GS", purchasePrice: 342.94, shares: 10, principalDate: '1/24/2022', exchangeName: 'NYSE' },
  { symbol: "MS", purchasePrice: 98.39, shares: 25, principalDate: '12/22/2021', exchangeName: 'NYSE' },
  { symbol: "NVDA", purchasePrice: 293.75, shares: 5, principalDate: '12/22/2021', exchangeName: 'NasdaqGS' },
  { symbol: "PYPL", purchasePrice: 191.57, shares: 10, principalDate: '12/22/2021', exchangeName: 'NasdaqGS' },
  { symbol: "PFE", purchasePrice: 47.45, shares: 100, principalDate: '11/10/2022', exchangeName: 'NYSE' },
  { symbol: "CRM", purchasePrice: 160.38, shares: 20, principalDate: '10/21/2022', exchangeName: 'NYSE' },
  { symbol: "SBUX", purchasePrice: 102.99, shares: 25, principalDate: '12/14/2022', exchangeName: 'NasdaqGS' },
  { symbol: "DIS", purchasePrice: 151.93, shares: 10, principalDate: '12/22/2021', exchangeName: 'NYSE' },
  { symbol: "VTI", purchasePrice: 239.05, shares: 10, principalDate: '12/22/2021', exchangeName: 'NYSEArca' },
  { symbol: "LI", purchasePrice: 32.53, shares: 225, principalDate: '11/13/2020', exchangeName: 'NasdaqGS' }

];
function get(req, res, next) {
  fetchedData = [];

  const options = {
    method: 'GET',
    url: 'https://yh-finance.p.rapidapi.com/market/v2/get-quotes',
    params: {
      region: 'US',
      symbols: 'GOOGL,TSLA,AMZN,BA,COIN,AAPL,CVS,GS,MS,NVDA,PYPL,PFE,CRM,SBUX,DIS,VTI,LI'
    },
    headers: {
      'X-RapidAPI-Key': '5e4d0eeb5bmsh1f0574004d6dfb6p160e9fjsnd9a3ae03ad63',
      'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
    }
  };
  axios.request(options).then(

    response => {
      const mergedData = hardcodedData.map((item, i) => Object.assign({}, item, response.data.quoteResponse.result[i]));
      res.json(mergedData)
    }
  )
    .catch(function (error) {
      console.error(error);
    });
}
function index(req, res) {
  try {
    const result = response => {
      const mergedData = [...hardcodedData, ...fetchedData]
      res.json(mergedData)
      console.log("merged data: " + mergedData[3])
    }
    return result
  }
  catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
module.exports = {
  get,
  index
};

