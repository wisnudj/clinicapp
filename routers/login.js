const	express = require('express')
const	router = express.Router()
const model = require('../models')
// const crypto = require('crypto')

// GET
router.get('/', (req,res)=>{
	// console.log('test')
		res.render('login', {title : 'login - Health+'})
})

// POST
router.post('/', (req,res) =>{
	model.User.findOne({
		where :{
			username: req.body.your_user_name
		}
	}).then(dataUser=>{
		// console.log(dataUser.password)
		if(dataUser.username === req.body.your_user_name && dataUser.password === req.body.your_password){
			req.session.username = req.body.your_user_name // session
			req.session.role = dataUser.role // session
			res.redirect('/') // minus title
		} else {
			res.render('login');
		}
	})
})

module.exports = router
