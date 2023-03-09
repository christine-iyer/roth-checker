import { useState, useEffect } from 'react';

import './App.css';
const SERVER_URL = "http://localhost:3008/api/portfolio/"

function App() {
  const [mergedData, setMergedData] = useState([])
  const [errorMessage, setErrorMessage] = useState("");

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
      // callback(err,null)
    }
  };
//mergedata=[{symbol, longName, fullExchangeName, principalDate,regularMarketPrice, shares} = {mergedData}] 
  
  // async function getData() {
  //   await fetch(SERVER_URL)
  //     .then(res => res.json())
  //     .then((results) => {
  //       console.log(results)
  //       console.log(results?.[0])
  //         // results.map(i=>("symbol:"+i.longName)))
  //       setMergedData([results?.[12]])
  //       console.log(results?.[12])
  //     })
  // }
  console.log(mergedData.length)
useEffect(() => {}, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button type='submit' onClick={getMergedData}>Click to prompt the Server to get current stock prices</button>
        </div>
        <div>

    <div   className='cass'>
    <ul className='happy'>
      {
            mergedData && mergedData.length
              ? mergedData.map(data => (
                <li
                  key={data?.symbol}
                  blog={data}>{data.symbol}</li>
              ))
              : <>
                <h2>No Blogs Yet... Add one in the Form Above</h2>
                </>
        }
    </ul>
    </div>
    </div>
      </header>

    </div>
  );
}

export default App;
