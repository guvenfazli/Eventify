const express = require('express')
const router = express.Router()
const controller = require('../controllers/authController')
const { body } = require('express-validator')

router.post('/createAccount', [
  body('name')
    .notEmpty()
    .withMessage('Name can not be empty!')
    .isLength({ min: 2 })
    .withMessage('Name must be minimum 2 characters!'),
  body('email')
    .notEmpty()
    .withMessage('Email can not be empty!')
    .isLength({ min: 2 })
    .withMessage('Email must be at least 2 characters long')
    .isEmail()
    .withMessage('Please provide a valid email!'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),
], controller.createAccount)


router.post('/loginAccount', [
  body('email')
    .notEmpty()
    .withMessage('Email can not be empty!')
    .isLength({ min: 2 })
    .withMessage('Email must be at least 2 characters long')
    .isEmail()
    .withMessage('Please provide a valid email!'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 characters long'),
], controller.loginAccount)

module.exports = router