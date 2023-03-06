const React = require('react')

class Index extends React.Component {
    render() {
        const { assets } = this.props
        return (
            <>
            <ul>
                {
                    assets.map((asset) => {
                        const { symbol, purchasePrice, shares, _id, regularMarketPrice, longName } = asset
                        return(
                            <li key={symbol}>{regularMarketPrice}</li>
                        )

                    })

                }
            </ul>
            </>





        )
    }
}

module.exports = Index