import React from 'react'

function totalMarketPrice(mergedData) {
  return mergedData.regularMarketPrice * mergedData.shares
}

function totalPurchasePrice(mergedData) {
  return mergedData.purchasePrice * mergedData.shares
}
function calculateAveragePrice(products) {
  const total = products.reduce((acc, product) => {
      return acc + parseFloat((product.regularMarketPrice * product.shares).replace('$', ''));
  }, 0);
  return (total / products.length).toFixed(2);
}

function calculateTotalPrice(cart) {
  const total = cart.reduce((acc, item) => {
      return acc + parseFloat(item.price.replace('$', ''));
  }, 0);
  return total.toFixed(2);
}
export default function TotalGainLoss({  mergedData }) {
     return (
       <>
       <h4>{mergedData.symbol}</h4>
       <button onClick={calculateAveragePrice}>See average price</button>
       <button onClick={calculateTotalPrice}>See total price</button>
       </>
     );
   }






