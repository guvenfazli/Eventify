const express = require('express')
const { Sequelize } = require('sequelize')
const session = require('express-session')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieparser = require('cookie-parser')
const sequelize = require('./utils/database')
const authRouter = require('./routes/authRoutes')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' });

var SequelizeStore = require("connect-session-sequelize")(session.Store);

app.use(
  session({
    secret: "test Secret",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
  })
);

/* Swagger API */
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


/* Models */
const User = require('./models/User')

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