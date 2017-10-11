var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//ejs
app.set('view engine', 'ejs');

//css
app.use(express.static(__dirname+'/views'))

//require routers
var dokter = require('./routers/dokter')
var pasien = require('./routers/pasien')
var diagnosis = require('./routers/diagnosis')
var user = require('./routers/user')
var index = require('./routers/index')
var periksa = require('./routers/periksa')

//route
app.use('/', index)
app.use('/dokter', dokter)
app.use('/pasien', pasien)
app.use('/diagnosis', diagnosis)
app.use('/user', user)
app.use('/periksa', periksa)

//listen
app.listen(process.env.PORT || '3000')
