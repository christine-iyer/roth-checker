import { useState, useEffect } from 'react';
import './App.css';
const SERVER_URL="http://localhost:3008/api/portfolio/"

function App() {
  const [mergedData, setMergedData] = useState([{
  symbol: '',
  longName:'',
  fullExchangeName: '', 
  purchasePrice: '',
  regularMarketPrice: '',
  shares: '' 
}])
  async function handleClick(){



      await fetch(SERVER_URL)
      .then(res=>res.json())
      .then((result)=> {console.log(result)})

      
      
    }
    useEffect(() => {
    setMergedData();
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <button type='submit' onClick={handleClick}>Click</button>

        </div>
        <>
      {mergedData && mergedData.regularMarketPrice ? (
        <div>
          <h1>
            {mergedData.regularMarketPrice}/{mergedData.shares}
          </h1>
          <h2>{mergedData.symbol}</h2>
        </div>
      ) : (
        <h1>Waiting on Server </h1>
      )}
    </>
       </header>
    </div>
  );
}


export default App;
