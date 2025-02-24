const { throwError } = require('./throwError')

exports.authCheck = async (req, res, next) => {
  if (!req.session || !req.session.userInfo) {
    throwError(410, "Please log in first!")
  }
}