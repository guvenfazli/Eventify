const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieparser = require('cookie-parser')


app.use(cors())
app.use(bodyParser.json())
app.use(cookieparser())











app.listen(8080, () => {
  console.log('Server is on.')
})