const express = require('express')
const router = express.Router()
const portfolioController = require('../../controllers/api/portfolio')
router.get('/', portfolioController.get, portfolioController.index)
module.exports = router 