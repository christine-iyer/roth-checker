import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import FormTextExample from './components/FormTextExample';
import SendEmail from './components/SendEmail'
import ImageFile from './components/ImageFile';

import './App.css';
const SERVER_URL = "http://localhost:3008/api/portfolio/"

function App() {
  const [mergedData, setMergedData] = useState([])
  const [errorMessage, setErrorMessage] = useState("");
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    };

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

  console.log(mergedData.length)
  useEffect(() => { }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button type='submit' onClick={getMergedData}>Click to prompt the Server to get current stock prices</button>
        </div>
        <div>
          <div className='cass'>
            <ul className='happy'>
              {
                mergedData && mergedData.length
                  ? mergedData.map(data => (
                    <li
                      key={data?.symbol}
                      blog={data}>{data.symbol + ' ' + (data.regularMarketPrice * data.shares).toFixed(2) +
                        '... you paid ' +
                        (data.purchasePrice * data.shares).toFixed(2) +
                        '... a  ' + (((data.regularMarketPrice * data.shares) - (data.purchasePrice * data.shares)) / (data.purchasePrice * data.shares) * 100).toFixed(2) + '%'}</li>
                  ))
                  : <>
                    <h2>No assets to refresh</h2>
                  </>
              }
            </ul>
          </div>
          <div>
        
            <SendEmail />
            <br />
            <FormTextExample />
            <br />
            <ImageFile images={images}/>
            </div>
        </div>
      </header>

    </div>
  );


}

export default App;
