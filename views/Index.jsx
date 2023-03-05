const React = require('react')

class Index extends React.Component {
    render() {
        const { mergedDatas } = this.props
        console.log(this.props)
        return (

                <div className="container mt-3 mb-3">
                    <div className="row justify-content-md-center">
                        {
                            mergedDatas.map((mergedData) => {
                                const { symbol, shares, regularMarketPrice } = mergedData
                                return (
                                    <div className="col-sm-3 mb-3">


                                        <div className="card shadow-sm border-0 rounded-0" >



                                            <div className="card-body">
                                                <h5 className="card-symbol fw-bold"><a href={`/mergedDatas/${_id}`}>{symbol}</a></h5>
                                                <p className="card-text">{regularMarketPrice}</p>
                                                <p className="card-text"><span className="fw-bold">Artist: </span>{shares}</p>

                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>



        )
    }
}

module.exports = Index