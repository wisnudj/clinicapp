var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');

//var teacher = require('./routers/teacher');
var dokter = require('./routers/dokter')
var pasien = require('./routers/pasien')
var diagnosis = require('./routers/diagnosis')
var user = require('./routers/diagnosis')

//app.use('/index', index)
app.use('/dokter', dokter)
app.use('/pasien', pasien)
app.use('/diagnosis', diagnosis)
app.use('/user', user)

app.listen(process.env.PORT || '3000')
