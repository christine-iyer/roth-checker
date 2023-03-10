import React from "react";

import Card from 'react-bootstrap/Card'

const DisplayItem = ({ result }) => {
     return (
          
               <Card

                    style={{
                         width: '15rem',
                         backgroundColor: "blue",
                         display: "grid",
                         alignText: "left",
                         gap: "1rem"
                    }}>
                    <Card.Body>
                         <Card.Title>{result.symbol}</Card.Title>
                         <Card.Subtitle>{result.fullExchangeName}</Card.Subtitle>
                         <Card.Text>{result.regularMarketDayHigh}</Card.Text>
                    </Card.Body>
               </Card>
          
     )
}
export default DisplayItem;
