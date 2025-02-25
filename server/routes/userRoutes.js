const express = require('express')
const router = express.Router()
const controller = require('../controllers/userControllers')
const { authCheck } = require('../utils/authCheck')
const { body, } = require('express-validator')

/* G E T S */
router.get('/trendingWorldEvents', authCheck, controller.fetchTrendingAroundTheWorldEvents)
router.get('/upcomingEvents', authCheck, controller.fetchUpcomingEvents)
router.get('/bestFreeEvents', authCheck, controller.fetchBestFreeEvents)
router.get('/getEvent/:eventId', authCheck, controller.fetchSingleEvent)
router.get('/similarEvents', authCheck, controller.fetchSimilarEvents)
router.get('/myTickets', authCheck, controller.fetchMyTickets)
router.get('/getInvoice/:invoiceId', authCheck, controller.getInvoice)
router.get('/interestedEvents', authCheck, controller.interestedEvents)
router.get('/searchEvents', authCheck, controller.searchEvents)

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
  body('ticketQuantity')
    .notEmpty()
    .withMessage('Please at least buy one ticket!'),
  body('totalPrice')
    .notEmpty()
    .withMessage('Please pay for the tickets!')
], controller.buyTicket)

module.exports = router

/* 
  body('phone')
    .isEmpty()
    .withMessage('Please provide a phone number!'),
*/