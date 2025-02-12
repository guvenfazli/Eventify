const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')

router.post('/createAccount', controller.createAccount)


module.exports = router