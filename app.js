const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const passport = require('passport')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoDbStore = require('connect-mongo')
const connectDB = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)


// -----------------Main process-------------------
const app = express()
connectDB()

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Show any http method in the console
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

// Sesssion
app.use(session({
    secret: 'ctrl v',
    resave: false,
    saveUninitialized: false,
    store: MongoDbStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))


const PORT = process.env.PORT || 3000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)