import React from 'react';

function StockItem({ mergedData }) {
    return (
        <li>
            <strong>{mergedData.longName} ({mergedData.symbol})</strong><br />
            Exchange: {mergedData.fullExchangeName}<br />
            Purchase Date: {mergedData.principalDate}<br />
            Purchase Price: ${mergedData.purchasePrice}<br />
            Market Price: ${mergedData.regularMarketPrice}<br />
            Shares: {mergedData.shares}
        </li>
    );
}

export default StockItem;
