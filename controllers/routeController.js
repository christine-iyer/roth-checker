const express = require('express')
const router = express.Router()
const portfolioController = require('./dataController')
const viewController = require('./viewController')

router.get('/', portfolioController.get, viewController.portfolioIndex)
module.exports = router 