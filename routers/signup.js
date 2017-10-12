const express = require('express')
const router = express.Router()
const model = require('../models')
const crypto = require('crypto')
// const randomAlpha = require('../helper/random')

// GET
router.get('/', (req,res)=>{
	model.User.findAll().then(dataUser =>{
		// res.send(dataUser)
		res.render('signup', {
			title: 'Signup - Health',
			dataUserToEjs:dataUser,
			// session: req.session
		})
	})
})


module.exports = router
