require('dotenv').config()


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
      console.log(data)


    } catch (e) {
      console.error(e);
      return e.message
    } 
    res.json= data
  }



   

async function index(req, res) {
  try{

    const result = response =>{
      const mergedData = [...Asset,...data]
      res.json(mergedData)
      console.log(mergedData)
    }
    return mergedData
  }
    catch(e){
    res.status(400).json({ msg: e.message });
  }  }

  module.exports = {
    getResults, 
    index
  };
  
