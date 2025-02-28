const User = require('../models/User')
const { throwError } = require('./throwError')


exports.adminCheck = async (req, res, next) => {
  const isAdmin = req.session.userInfo.isAdmin

  const foundUser = await User.findByPk(req.session.userInfo.userId)

  if (!foundUser) {
    throwError(410, "You are not a user!")
  } else if (!req.session) {
    throwError(410, "You are not logged in!")
  }

  if (!foundUser.isAdmin || !isAdmin) {
    throwError(410, "You do not have the required permissions in order to create an event!")
  }
  next()
}