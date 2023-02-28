const express = require('express')
const router = express.Router()
const portfolioController = require('../../controllers/api/portfolio')
router.get('./api/portfolio', portfolioController, portfolioController.index)
module.exports = router