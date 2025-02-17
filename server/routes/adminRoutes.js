const express = require('express')
const router = express.Router()
const controller = require('../controllers/adminControllers')
const multer = require('multer')
const upload = multer()
const { body, } = require('express-validator')


router.post('/createEvent', upload.single('eventImage'), [
  body('title')
    .exists()
    .withMessage('Title can not be empty!')
    .notEmpty()
    .withMessage('Title can not be empty!')
    .isLength({ min: 2 })
    .withMessage('Title must be minimum 2 characters!'),
  body('category')
    .notEmpty()
    .withMessage('Category can not be empty!'),
  body('startDate')
    .notEmpty()
    .withMessage('Start Date is required!')
    .isDate()
    .withMessage('It must be a valid date!'),
  body('location')
    .notEmpty()
    .withMessage('Location can not be empty!'),
  body('description')
    .notEmpty()
    .withMessage('Description can not be empty!'),
  body('eventType')
    .notEmpty()
    .withMessage('Event Type can not be empty!'),
], controller.createEvent)


module.exports = router
