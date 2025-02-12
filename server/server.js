const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieparser = require('cookie-parser')
const sequelize = require('./utils/database')
const authRouter = require('./routes/authRoutes')

/* Middlewares */
app.use(cors())
app.use(cookieparser())
app.use(bodyParser.json())











/* Routes */

app.use('/auth', authRouter)



app.use((error, req, res, next) => {
  const message = error.message
  const statusCode = error.statusCode || 500
  res.status(statusCode).json({ message })
})

sequelize.sync().then((res) => {
  app.listen(8080, () => {
    console.log('Server is on.')
  })
}).catch(err => console.log(err));