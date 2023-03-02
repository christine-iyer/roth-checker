const React = require('react')

class SharesList extends React.Component {
  render () {
    const { shares } = this.props
    return (
     <>

        <ul>
          {
                        fruits.map((fruit) => {
                          const { symbol, regularMarketPrice, shares, _id } = fruit
                          return (
                            <li key={_id}>
                              <a href={`/fruits/${_id}`}>
                                {symbol}
                              </a> is {purchasePrice}

                              <br />
                              {
                                        shares
                                         
                                    }
                              <br />
                              
                            </li>
                          )
                        })
                    }
        </ul>
        </>

    )
  }
}

module.exports = SharesList