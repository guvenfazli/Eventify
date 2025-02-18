const express = require('express')
const router = express.Router()
const controller = require('../controllers/userControllers')

router.get('/trendingWorldEvents', controller.fetchTrendingAroundTheWorldEvents)
router.get('/getEvent/:eventId', controller.fetchSingleEvent)

module.exports = router