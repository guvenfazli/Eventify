const { throwError } = require('../utils/throwError') // (statusCode, errorMsg)
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
/* Models */
const User = require('../models/User')

exports.createAccount = async (req, res, next) => {
  const { name, email, password } = req.body
  const errors = validationResult(req)
  const splitted = name.split(' ')
  const surname = splitted[splitted.length - 1]
  const fullName = name.replace(surname, '')

  try {
    if (!errors.isEmpty()) {
      throwError(errors.array()[0].msg, 410)
    }
    
    const foundUser = await User.findOne({ where: { email: email } })

    if (foundUser) {
      throwError(410, 'User already exists!')
    }

    const hashedPw = await bcrypt.hash(password, 12)

    User.create({
      name: fullName.trim(),
      surname,
      email,
      password: hashedPw,
    })

    res.status(200).json({ message: 'Account created successfully!' })
    return;
  } catch (err) {
    next(err)
  }

}

exports.loginAccount = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const foundUser = await User.findOne({ where: { email: email } })

    if (!foundUser) {
      throwError(410, 'User does not exist!')
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordMatch) {
      throwError(410, 'Incorrect name or password!')
    }

    res.status(200).json({ message: `Welcome back ${foundUser.name}!` })
    return;
  } catch (err) {
    next(err)
  }
}