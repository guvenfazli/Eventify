const express = require('express')
const router = express.Router()
const controller = require('../controllers/adminControllers')

router.post('/createEvent', controller.createEvent)


module.exports = router
