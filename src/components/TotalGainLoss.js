import React, { useState } from 'react';

import StockItem from './StockItem';

const stockData = [
    {
        fullExchangeName: "NasdaqGS",
        longName: "Alphabet Inc.",
        principalDate: "12/22/2021",
        purchasePrice: 143.49,
        regularMarketPrice: 177.79,
        shares: 100,
        symbol: "GOOGL"
    },
    {
        symbol: 'TSLA',
        longName: 'Tesla, Inc.',
        fullExchangeName: 'NasdaqGS',
        regularMarketPrice: 177.29,
        purchasePrice: 242.54,
        shares: 50,
        principalDate: "01/15/2022"
    }
];

function calculateTotalMarketValue(stocks) {
    return stocks.reduce((total, stock) => total + stock.regularMarketPrice * stock.shares, 0).toFixed(2);
}

function calculateTotalGainLoss(stocks) {
    return stocks.reduce((total, stock) => total + (stock.regularMarketPrice - stock.purchasePrice) * stock.shares, 0).toFixed(2);
}

export default function TotalGainLoss({mergedData}) {
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


