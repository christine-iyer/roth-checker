import React, { useState } from 'react';
import './App.css';
import StockItem from './StockItem';



function calculateTotalMarketValue(stocks) {
    return stocks.reduce((total, stock) => total + stock.regularMarketPrice * stock.shares, 0).toFixed(2);
}

function calculateTotalGainLoss(stocks) {
    return stocks.reduce((total, stock) => total + (stock.regularMarketPrice - stock.purchasePrice) * stock.shares, 0).toFixed(2);
}

export default function Total({mergedData}) {
    const [stocks, setStocks] = useState(mergedData);

    const totalMarketValue = calculateTotalMarketValue(stocks);
    const totalGainLoss = calculateTotalGainLoss(stocks);

    return (
        <div className="Total">
            <header className="Total-header">
                <h1>Stock Portfolio</h1>
                <h2>Stocks</h2>
                <ul>
                    {stocks.map((stock, index) => (
                        <StockItem key={index} stock={stock} />
                    ))}
                </ul>
                <h2>Portfolio Summary</h2>
                <p>Total Market Value: ${totalMarketValue}</p>
                <p>Total Gain/Loss: ${totalGainLoss}</p>
            </header>
        </div>
    );
}


