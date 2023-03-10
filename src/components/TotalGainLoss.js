import React from 'react'


export default function TotalGainLoss({ getTotal, results }) {
     return (
       <>
       <h4>{results}</h4>
       <button onClick={getTotal}>See total Total</button>
       </>
     );
   }






