const express = require('express')
const router = express.Router()
const portfolioController = require('../../controllers/api/portfolio')
router.get('./portfolio', portfolioController.getResults, portfolioController.index)
module.exports = router