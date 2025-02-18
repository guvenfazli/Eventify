const express = require('express')
const router = express.Router()
const controller = require('../controllers/userControllers')

/* G E T S */
router.get('/trendingWorldEvents', controller.fetchTrendingAroundTheWorldEvents)
router.get('/getEvent/:eventId', controller.fetchSingleEvent)


/* P O S T S */
router.post('/beInterested/:eventId', controller.beInterested)

module.exports = router