const express = require('express')
const router = express.Router()
const model = require('../models')
const crypto = require('crypto')
const randomAlpha = require('../helper/random')


router.use(function(req,res,next){
  // console.log(req.session)
  if(req.session.hasOwnProperty('username')){
    res.redirect('/')
  }else{
    next()
  }
})

// GET
router.get('/', (req,res)=>{
	model.User.findAll().then(dataUser =>{
		// res.send(dataUser)
		res.render('signup', {
			title: 'Signup - Health',
			dataUserToEjs:dataUser,
			session: req.session
		})
	})
})

// POST
router.post('/', (req,res)=>{
	let secret = randomAlpha(8, '#aA')
	let naturalPassword = req.body.signup_password
	// console.log(naturalPassword)
	const password = crypto.createHmac('sha256', secret)
                   .update(naturalPassword)
                   .digest('hex');
  model.User.create(
  {
  	username : req.body.signup_user_name,
  	password : req.body.signup_password,
  	role     : req.body.signup_role,
  	salt     : secret
  }).then(()=>{
  	res.render('login', {title:'Login - Health+'})
  })
})


module.exports = router
