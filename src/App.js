import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TotalGainLoss from './components/TotalGainLoss'
import './App.css';

import './App.css';
const SERVER_URL = "http://localhost:3008/api/portfolio/"

function App() {
  const [mergedData, setMergedData] = useState([])
  const [errorMessage, setErrorMessage] = useState("");
  const [showTotalChange, setShowTotalChange] = useState(0)

  const getMergedData = async () => {
    try {
      const response = await fetch(
        SERVER_URL
      );
      const data = await response.json();
      setMergedData(data);
      console.log(data)
    } catch (e) {
      console.error(e);
      setErrorMessage(e.message);
    }
  };
  async function getData() {
    await fetch(SERVER_URL)
      .then(res => res.json())
      .then((results) => {
        console.log(results)
        console.log(results?.[0])
        setMergedData([results?.[12]])
        console.log(results?.[12])
      })
  }
  const calculateTotalPurchasePrice = (data) => {
    return data.reduce((total, stock) => total + (stock.purchasePrice * stock.shares), 0).toFixed(2);
  };

  const totalPurchasePrice = calculateTotalPurchasePrice(mergedData);

  const calculateTotalMarketValue = (data) => {
    return data.reduce((total, stock) => total + (stock.regularMarketPrice * stock.shares), 0).toFixed(2).toLocaleString();
  };

  const totalMarketValue = calculateTotalMarketValue(mergedData);

  useEffect(() => { }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>Click to prompt the Server to get current stock prices</label>
          <button type='submit' onClick={getMergedData}></button>
        </div>
        <div>
          <div className='cass'>
            <div className='happy'>
              {
                mergedData && mergedData.length
                  ? mergedData.map(data => (
                    <p
                      key={data?.symbol}
                      blog={data}>
                      {'Currently '+ data.symbol +  ' is valued at '+
                        (data.regularMarketPrice * data.shares).toFixed(2).toLocaleString("en-US") +
                        '... you paid ' +
                        (data.purchasePrice * data.shares).toFixed(2).toLocaleString("en-US") +
                        '... a  ' +
                        (
                          (
                            (data.regularMarketPrice * data.shares) -
                            (data.purchasePrice * data.shares)) /
                          (data.purchasePrice * data.shares) * 100).toFixed(2)
                        + '%'}
                    </p>))
                  : <>
                    <h2>No Blogs Yet... Add one in the Form Above</h2>
                  </>
              }
            </div>
            <div>
              <h3>Total Purchase Price: ${totalPurchasePrice}</h3>
              <h3>Total Mkt Value: ${totalMarketValue}</h3>
              <label>Click to prompt the Server to your overall percent change.</label>

          <button type='submit' onClick={showTotalChange}></button>

              <h3>Percent Change: {((totalMarketValue-totalPurchasePrice)/totalPurchasePrice*100).toFixed(2)}%</h3>
            </div>
          </div>
          <div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
