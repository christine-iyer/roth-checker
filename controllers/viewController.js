const ASSET_RESOURCE_PATH = '/'



const viewController = {
     portfolioIndex(req, res){
          res.json(res.locals.data.results)
}
}
module.exports = viewController