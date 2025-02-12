const { throwError } = require('../utils/throwError') // (statusCode, errorMsg)
const bcrypt = require('bcryptjs')

/* Models */
const User = require('../models/User')

exports.createAccount = async (req, res, next) => {
  const { name, email, password } = req.body
  const splitted = name.split(' ')
  const lastName = splitted.length - 1

  try {
    const foundUser = await User.findOne({ email: email })

    if (foundUser) {
      throwError(410, 'User already exists!')
    }

    if (!name) {
      throwError(410, 'Testing Custom Error!')
    }


  } catch (err) {
    next(err)
  }

}

exports.loginAccount = (req, res, next) => {
  const { email, password } = req.body
  console.log(req.body)
}