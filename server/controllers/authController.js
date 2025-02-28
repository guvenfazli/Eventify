const { throwError } = require('../utils/throwError') // (statusCode, errorMsg)
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const redisClient = require('../utils/redis')

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

    const createdUser = await User.create({
      name: fullName.trim(),
      surname,
      email,
      password: hashedPw,
    })

    req.session.userInfo = { userId: createdUser.id, name: createdUser.name, isAdmin: createdUser.isAdmin }
    res.status(200).json({ message: 'Account created successfully!', loggedAccount: { userId: createdUser.id, name: createdUser.name, isAdmin: createdUser.isAdmin } })
    return;
  } catch (err) {
    next(err)
  }

}

exports.loginAccount = async (req, res, next) => {
  const { email, password } = req.body
  const errors = validationResult(req)

  try {
    if (!errors.isEmpty()) {
      throwError(errors.array()[0].msg, 410)
    }

    const foundUser = await User.findOne({ where: { email: email } })

    if (!foundUser) {
      throwError(410, 'User does not exist!')
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordMatch) {
      throwError(410, 'Incorrect name or password!')
    }

    req.session.userInfo = { userId: foundUser.id, name: foundUser.name, isAdmin: foundUser.isAdmin }
    res.status(200).json({ message: `Welcome back ${foundUser.name}!`, loggedAccount: { userId: foundUser.id, name: foundUser.name, isAdmin: foundUser.isAdmin } })

    return;
  } catch (err) {
    next(err)
  }
}

exports.logOut = async (req, res, next) => {
  await req.session.destroy(async () => {
    res.clearCookie('connect.sid')
    res.json({ message: 'Logged out!' })
    redisClient.sendCommand(["FLUSHDB"])
    return;
  })
}
