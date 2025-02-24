const express = require('express')
const { Sequelize } = require('sequelize')
const session = require('express-session')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieparser = require('cookie-parser')
const sequelize = require('./utils/database')
const path = require('path')
const multer = require('multer')
const dotenv = require('dotenv')
const { extendDefaultFields } = require('./models/Session')
dotenv.config({ path: './.env' });

var SequelizeStore = require("connect-session-sequelize")(session.Store);

/* Multer Settings for Image Uploading */

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'eventImages')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'application/pdf') {
    cb(null, true)
  }
}

/* Routes */
const authRouter = require('./routes/authRoutes')
const adminRouter = require('./routes/adminRoutes')
const userRouter = require('./routes/userRoutes')

/* Swagger API */
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


/* Models */
const User = require('./models/User')
const Event = require('./models/Event')
const UserEventInterested = require('./models/UserEventInterested')
const Ticket = require('./models/Ticket')
const UserTicket = require('./models/UserTicket')

/* Relations */
User.belongsToMany(Event, { through: UserEventInterested })
Event.belongsToMany(User, { through: UserEventInterested })

Event.hasOne(Ticket, { onDelete: 'CASCADE' })
Ticket.belongsTo(Event, { onDelete: 'CASCADE' })

User.belongsToMany(Ticket, { through: UserTicket })
Ticket.belongsToMany(User, { through: UserTicket })


/* Middlewares */
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))
app.use(cookieparser())
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).array('eventImage', 1))
app.use('/eventImages', express.static(path.join(__dirname, 'eventImages')))
app.use(bodyParser.json())
app.use( // Session store for Sequelize with Dialect PostgreSQL.
  session({
    secret: `${process.env.DB_SESSION_SECRET}`,
    store: new SequelizeStore({
      db: sequelize,
      extendDefaultFields: extendDefaultFields
    }),
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 } // Will change secure after the project is ready to go production.
  })
);

/* Routes */

app.use('/auth', authRouter)
app.use('/admin', adminRouter)
app.use('/', userRouter)


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