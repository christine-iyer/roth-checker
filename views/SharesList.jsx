const React = require('react')

class SharesList extends React.Component {
  render () {
    const { shares } = this.props
    return (
     <>

        <ul>
          {
                        fruits.map((share) => {
                          const { symbol, regularMarketPrice, shares, _id } = share
                          return (
                            <li key={_id}>
                              <a href={`/portfolio/${_id}`}>
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