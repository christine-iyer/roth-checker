import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {

  async function handleClick(){
    await fetch('http://localhost:3008/api/portfolio')
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
       
  
          <Button handleClick={handleClick}/>
        

      </header>
    </div>
  );
}

export default App;
