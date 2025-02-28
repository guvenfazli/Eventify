const express = require('express')
const router = express.Router()
const controller = require('../controllers/adminControllers')
const adminCheck = require('../utils/adminCheck')
const { body, } = require('express-validator')


router.post('/createEvent', [
  body('title')
    .notEmpty()
    .withMessage('Title can not be empty!')
    .isLength({ min: 2 })
    .withMessage('Title must be minimum 2 characters!'),
  body('category')
    .notEmpty()
    .withMessage('Category can not be empty!'),
  body('startDate')
    .notEmpty()
    .withMessage('Start Date is required!'),
  body('location')
    .notEmpty()
    .withMessage('Location can not be empty!'),
  body('description')
    .notEmpty()
    .withMessage('Description can not be empty!')
    .isLength({ min: 20 })
    .withMessage("Please enter at least 20 characters of description."),
  body('eventType')
    .notEmpty()
    .withMessage('Event Type can not be empty!'),
], adminCheck.adminCheck, controller.createEvent)


module.exports = router
