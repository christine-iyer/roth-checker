
import Card from 'react-bootstrap/Card';

export default function List({results}) {

	const listItems = results.map((result) => (

		<li key={result.symbol}>
			<Card body className="p-3" style={{ "width": "20%" }} align="center">
				<b>{result.symbol}:</b>
				{' ' +
					result.shares +
					' shares @ $' +
					result.purchasePrice +
					' cost $' +
					result.purchasePrice * result.shares.toFixed(2)}
			</Card>
		</li>
	));
	return (
		<article>
			<h1>Scientists</h1>
			<ul>{listItems}</ul>
		</article>
	);
}