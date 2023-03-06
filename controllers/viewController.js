const ASSET_RESOURCE_PATH = '/portfolio'



const viewController = {
     portfolioIndex(req, res, next){
          res.render(`Index.jsx`, res.locals.data)
}
}
module.exports = viewController