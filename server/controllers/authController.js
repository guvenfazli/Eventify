const { throwError } = require('../utils/throwError') // (statusCode, errorMsg)
const bcrypt = require('bcryptjs')

/* Models */
const User = require('../models/User')

exports.createAccount = async (req, res, next) => {
  const { name, email, password } = req.body
  const splitted = name.split(' ')
  const surname = splitted[splitted.length - 1]
  const fullName = name.replace(surname, '')

  try {
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

exports.loginAccount = (req, res, next) => {
  const { email, password } = req.body
  console.log(req.body)
}