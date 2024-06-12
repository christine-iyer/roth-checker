import React from 'react';

function StockItem({ stock }) {
    return (
        <li>
            <strong>{stock.longName} ({stock.symbol})</strong><br />
            Exchange: {stock.fullExchangeName}<br />
            Purchase Date: {stock.principalDate}<br />
            Purchase Price: ${stock.purchasePrice}<br />
            Market Price: ${stock.regularMarketPrice}<br />
            Shares: {stock.shares}
        </li>
    );
}

export default StockItem;
