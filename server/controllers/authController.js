const bcrypt = require('bcryptjs')

exports.createAccount = (req, res, next) => {
  const { name, email, password } = req.body
  console.log(req.body)
  console.log(name, email, password)
}