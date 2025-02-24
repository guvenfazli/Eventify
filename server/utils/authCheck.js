const dayjs = require('dayjs')
const { throwError } = require('./throwError')

exports.authCheck = async (req, res, next) => {
  if (!req.session || !req.session.userInfo) {
    throwError(401, "Please log in first!")
  } else if (!req.session.cookie || !req.session.cookie._expires) {
    throwError(401, "Session could not found, please log in!")
  }

  const momentStamp = dayjs().unix()
  const sessionStamp = dayjs(req.session.cookie._expires).unix()

  if (sessionStamp <= momentStamp) {
    await req.session.destroy()
    throwError(440, "Session expired, please re-log in!")
  }

  next()
}

