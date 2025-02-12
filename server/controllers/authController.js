const bcrypt = require('bcryptjs')

exports.createAccount = (req, res, next) => {
  const { name, email, password } = req.body
  const splitted = name.split(' ')
  const lastName = splitted.length - 1

}

exports.loginAccount = (req, res, next) => {
  const { email, password } = req.body
  console.log(req.body)
}