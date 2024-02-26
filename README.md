### Plan


| Element      | Eval |MicroTasks|
| :---        |    :----    |        :--- |
|Stocks   | This display, accessed by a button, is essentially a table of the 17 stocks in this portfolio. If the data were displayed as a table, it would be easier to understand.           |<ul>&#9744;format numbers and prices <br> &#9744;P & L Column<br> &#9744;Total percent<br> &#9744;Total P&L<br></ul>    |
| Email      | I tested this email functionality and it appears to be working fine. There is a second set of apparent email input fields without functionality        |<ul>&#9744;Delete second set of email inout fields <br> &#9744;Verify that there are no negative email repercussions starting 9/7/2023</ul>     |
| Photo   | My justification for keeping this functionality is that it allow the user to upload multiple photos, using an array of images. I would like to expand this functionality to save the array of generated urls (cloudinary) to a database (mongoose) |<ul>&#9744;Save the array of urls <br> &#9744;Save url array to the mongo database.</ul> |
| Functionality      | What was supposed to be a roth summary, has become a repository for react functionality I hope to finesse at some point in the near future.     |<ul>&#9744;Item one <br> &#9744;Item two<br> &#9744;Item three</ul> |

Here is a link to summarising an array. 

```JS
const data = [
  { name: "jack", prix: 100 },
  { name: "helen", prix: 200 },
  { name: "jack", prix: 300 },
];

const output = data.reduce((prev, { name, prix }) => {
  prev[name] = prev[name] ? prev[name] + prix : prix;
  return prev;
}, {});

console.log(output);
```
# Let's just take a step back and look at where we are and where we want to go

The purpose of this app is to build a handy portfolio checker for the person who wants a picture of how selected assets are performing in relation to one another and to the portfolio as a whole. 

As this is meant to be a custom app, a client's principal holdings will be hardcoded to use as a baseline for comparison an real time. The real time share prices will be accessed through yahoo finance api, accessed through rapid api. 

Because I intent to build out user interaction, I want to build the front end in react, however, I would prefer not to make repeated API calls in a single session. Additionally, in order to make customer centric visualizations I need to merge current prices with the principal variables. This is all better handled in the back end. 

![](./processApp.png)



Above is the process I envision. It starts on the left when the client arrives at the App.js. If the user click the button to enter the site, the app will re-route to the backend route on the server. There, the yahoo api will return the current prices for 16 stocks. This api data will be merged with a hardcoded data set. This data set will be used to render different views of the customer portfolio. I haven't decided if I will return the data to the front end to render visualizations in d3 react, or if I will do it in the backend. 

Currently I'm getting the following errors. 

**/3000**

![](./current%20issue.png)

**/3008**

![](./Screen%20Shot%202023-02-27%20at%201.15.58%20PM.png)

**/3008/api/portfolio**


### Test Code 

```    

   // console.log(
      " Symbol: " 
      // + JSON.stringify(response.data.quoteResponse.result[1].symbol ) + 
      // " aka: " + JSON.stringify(response.data.quoteResponse.result[1].longName ) + 
      // " Exchange Name: " + JSON.stringify(response.data.quoteResponse.result[1].fullExchangeName ) + 
      // " Today's Price: " + JSON.stringify(response.data.quoteResponse.result[1].regularMarketPrice ) + 
      // " Today it's worth: " + JSON.stringify(response.data.quoteResponse.result[1].regularMarketPrice*hardcodedData[1].shares) + 
      // " When I bought it I paid:  " + JSON.stringify(hardcodedData[1].purchasePrice*hardcodedData[1].shares) +
      // " PercentChange:  " + JSON.stringify((((response.data.quoteResponse.result[1].regularMarketPrice - hardcodedData[1].purchasePrice)/(response.data.quoteResponse.result[1].regularMarketPrice))*11))+
      // "  Total Change:  " + JSON.stringify((response.data.quoteResponse.result[1].regularMarketPrice-hardcodedData[1].purchasePrice)*hardcodedData[1].shares)
      //);
```
```
const hardcodedData = [
  { symbol: "GOOGL", purchasePrice: 143.49, shares: 100, principalDate: '12/22/2021', exchangeName: 'NasdaqGS' },
  { symbol: "TSLA", purchasePrice: 242.54, shares: 45, principalDate: '11/27/2020', exchangeName: 'NasdaqGS' },
  { symbol: "AMZN", purchasePrice: 160.00, shares: 80, principalDate: '11/27/2020', exchangeName: 'NasdaqGS' },
  { symbol: "BA", purchasePrice: 188.59, shares: 25, principalDate: '12/14/2022', exchangeName: 'NYSE' },
  { symbol: "COIN", purchasePrice: 257.31, shares: 50, principalDate: '12/28/2021', exchangeName: 'NasdaqGS' },
  { symbol: "AAPL", purchasePrice: 114.56, shares: 200, principalDate: ' 11/23/2020', exchangeName: 'NasdaqGS' },
  { symbol: "CVS", purchasePrice: 89.83, shares: 25, principalDate: '1/11/2023', exchangeName: 'NYSE' },
  { symbol: "GS", purchasePrice: 342.94, shares: 10, principalDate: '1/24/2022', exchangeName: 'NYSE' },
  { symbol: "MS", purchasePrice: 98.39, shares: 25, principalDate: '12/22/2021', exchangeName: 'NYSE' },
  { symbol: "NVDA", purchasePrice: 293.75, shares: 5, principalDate: '12/22/2021', exchangeName: 'NasdaqGS' },
  { symbol: "PYPL", purchasePrice: 191.57, shares: 10, principalDate: '12/22/2021', exchangeName: 'NasdaqGS' },
  { symbol: "PFE", purchasePrice: 47.45, shares: 100, principalDate: '11/10/2022', exchangeName: 'NYSE' },
  { symbol: "CRM", purchasePrice: 160.38, shares: 20, principalDate: '10/21/2022', exchangeName: 'NYSE' },
  { symbol: "SBUX", purchasePrice: 102.99, shares: 25, principalDate: '12/14/2022', exchangeName: 'NasdaqGS' },
  { symbol: "DIS", purchasePrice: 151.93, shares: 10, principalDate: '12/22/2021', exchangeName: 'NYSE' },
  { symbol: "VTI", purchasePrice: 239.05, shares: 10, principalDate: '12/22/2021', exchangeName: 'NYSEArca' },
  { symbol: "LI", purchasePrice: 32.53, shares: 225, principalDate: '11/13/2020', exchangeName: 'NasdaqGS' }

];
```


Mostly read to day

### Planning Ahead
![pic](./Plan.png)