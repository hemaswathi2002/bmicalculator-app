require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3086

const configureDB = require('./config/db')
configureDB()

const userCltr = require('./App/controllers/users-controllers')
const loginCltr = require('./App/controllers/login-controllers')
const authenticateUser  = require('./App/middleware/auth')

app.use(express.json())
app.use(cors())

app.post('/api/users',authenticateUser,userCltr.create)
app.get('/api/users',authenticateUser,userCltr.list)
app.delete('/api/users/:id',authenticateUser,userCltr.destroy)
app.post('/api/login',loginCltr.login)
app.listen(port,()=>{
    console.log(`bmi-app is successfully running on the ${port}`)
})