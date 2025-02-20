const express = require('express')
const router = express.Router()
const controller = require('../controllers/userControllers')

/* G E T S */
router.get('/trendingWorldEvents', controller.fetchTrendingAroundTheWorldEvents)
router.get('/upcomingEvents', controller.fetchUpcomingEvents)
router.get('/bestFreeEvents', controller.fetchBestFreeEvents)
router.get('/getEvent/:eventId', controller.fetchSingleEvent)
router.get('/similarEvents', controller.fetchSimilarEvents)
router.get('/myTickets', controller.fetchMyTickets)
router.get('/interestedEvents', controller.interestedEvents)

/* P O S T S */
router.post('/beInterested/:eventId', controller.beInterested)
router.post('/buyTicket/:ticketId', controller.buyTicket)

module.exports = router