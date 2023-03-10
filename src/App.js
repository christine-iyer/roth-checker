import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Container from 'react-bootstrap/Container';
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from './components/SortableItem';
import Display from './components/Display';


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
                  blog={data}>{data.symbol+ ' '+(data.regularMarketPrice* data.shares).toFixed(2)+
                   '... you paid '+
                   (data.purchasePrice* data.shares).toFixed(2)+ 
                  '... a  '+  (((data.regularMarketPrice* data.shares) - (data.purchasePrice* data.shares))/(data.purchasePrice* data.shares)*100).toFixed(2)+'%'}</li>
              ))
              : <>
                <h2>No Blogs Yet... Add one in the Form Above</h2>
                </>

                
        }
    </ul>
    </div>

    <div>
      <Display />
      
   
  
    </div>
    </div>
      </header>

    </div>
  );

  function cardBody (data) {

  }

  function handleDragEnd(event) {
    console.log("Drag end called");
    const {active, over} = event;
    console.log("ACTIVE: " + active.id);
    console.log("OVER :" + over.id);

    if(active.id !== over.id) {
      setMergedData((items) => {
        const activeIndex = items.indexOf(active.id);
        const overIndex = items.indexOf(over.id);
        console.log(arrayMove(items, activeIndex, overIndex));
        return arrayMove(items, activeIndex, overIndex);
        // items: [2, 3, 1]   0  -> 2
        // [1, 2, 3] oldIndex: 0 newIndex: 2  -> [2, 3, 1] 
      });
      
    }
  }
}

export default App;
