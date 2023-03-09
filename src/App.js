import { useState, useEffect } from 'react';

import './App.css';
const SERVER_URL = "http://localhost:3008/api/portfolio/"

function App() {
  const [mergedData, setMergedData] = useState([])

  async function handleClick() {
    await fetch(SERVER_URL)
      .then(res => res.json())
      .then((results) => {
        console.log(results)
        console.log(results.map(i=>("symbol:"+i.longName)))
        setMergedData([...results])
        return setMergedData
      })
  }
useEffect(() => {setMergedData()}, [mergedData]);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button type='submit' onClick={handleClick}>Click to prompt the Server to get current stock prices</button>
        </div>
      </header>

    </div>
  );
}

export default App;
