import React from 'react'

export default function TotalGainLoss({results}){
     const sumPurchase = results.reduce(
          (results, currentValue) => results?.shares + currentValue.x,
          0,
        );
}
