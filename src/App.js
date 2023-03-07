import { useState, useEffect } from 'react';
import './App.css';
const SERVER_URL="http://localhost:3008/api/portfolio/"

function App() {async function handleClick(){
  //const [mergedData, setMergedData] = useState([])
      await fetch(SERVER_URL)

      .then(res=>res.json())
      .then(
        (result)=> {
          console.log(result)
        }
        )

      
      
    }
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <button type='submit' onClick={handleClick}>Click</button>
        </div>
       </header>
    </div>
  );
}


export default App;
