const	express = require('express')
const	router = express.Router()
const model = require('../models')
const crypto = require('crypto')

// GET
router.get('/', (req,res)=>{
	// console.log('test')
		res.render('login', {title : 'login - Health+'})
})

module.exports = router
