const express = require('express')
const router = express.Router()
const controller = require('../controllers/userControllers')
const { body, } = require('express-validator')

/* G E T S */
router.get('/trendingWorldEvents', controller.fetchTrendingAroundTheWorldEvents)
router.get('/upcomingEvents', controller.fetchUpcomingEvents)
router.get('/bestFreeEvents', controller.fetchBestFreeEvents)
router.get('/getEvent/:eventId', controller.fetchSingleEvent)
router.get('/similarEvents', controller.fetchSimilarEvents)
router.get('/myTickets', controller.fetchMyTickets)
router.get('/getInvoice/:invoiceId', controller.getInvoice)
router.get('/interestedEvents', controller.interestedEvents)
router.get('/searchEvents', controller.searchEvents)

/* P O S T S */
router.post('/beInterested/:eventId', controller.beInterested)
router.post('/buyTicket/:ticketId', [
  body('fullName')
    .notEmpty()
    .withMessage('Please provide a valid name!')
    .isLength({ min: 2 })
    .withMessage('Fullname must be minimum 2 characters!'),
  body('email')
    .isEmail()
    .withMessage('Please provide a correct/valid email!')
    .notEmpty()
    .withMessage('Email can not be empty!'),
  body('phone')
    .isEmpty()
    .withMessage('Please provide a phone number!'),
  body('ticketQuantity')
    .notEmpty()
    .withMessage('Please at least buy one ticket!'),
  body('totalPrice')
    .notEmpty()
    .withMessage('Please pay for the tickets!')
], controller.buyTicket)

module.exports = router