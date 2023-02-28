import './App.css';

function App() {async function handleClick(){
      await fetch("http://localhost:3008/api/portfolio/")
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
