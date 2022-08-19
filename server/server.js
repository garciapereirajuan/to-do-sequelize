const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const cookieSession = require('cookie-session')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const sequelize = new Sequelize('to-do-db', null, null, {
  dialect: 'sqlite',
  storage: './to-do-db',
})

//Load Routes
const TaskRoutes = require('./routes/task')

//Routes Basic
app.use('/', TaskRoutes)

app.listen(3030, () => {
  console.log("######################")
  console.log("###### API REST ######")
  console.log("######################")
  console.log("http://localhost:3030")
})
