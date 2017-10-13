let express = require('express');
let router = express.Router();
let model = require('../models');
const crypto = require('crypto')
const randomAlpha = require('../helper/random')


// SESSION
router.use(function(req,res,next){
	// console.log(req.session)
	if(req.session && req.session.hasOwnProperty('username')){
		next()
	}else{
		res.redirect('/login')
	}
})


// --------------------------- * basic CRUD * ---//

// CREATE
router.get('/add', (req,res) =>{
  model.User.findAll().then( data_Users => {
    res.render('user-add', {
      title : 'Add User Clinic App',
      data_UsersToEjs : data_Users,
      pesanError: null
    })
  })
})

router.post('/add', (req,res)=>{
	let secret = randomAlpha(8, '#aA')
	let naturalPassword = req.body.password_ejs
	// console.log(naturalPassword)
	const password = crypto.createHmac('sha256', secret)
                   .update(naturalPassword)
                   .digest('hex');
  model.User.create(
  {
  	username : req.body.username_ejs,
  	password : password,
  	role     : req.body.role_ejs,
  	salt     : secret
  }).then(()=>{
  	// res.render('login', {title:'Login - Health+'})
		res.redirect('../../user')
  })
})

// READ
router.get('/', (req,res)=>{
  model.User.findAll().then( data_Users =>{
    // res.send(data_Users)
    res.render('user', {
			title:'Users Clinic App',
			data_UsersToEjs:data_Users,
			session:req.session
		})
  })
})


// UPDATE
router.get('/edit/:id', (req,res) => {
  model.User.findById(req.params.id).then( data_Users => {
    res.render('user-edit', {title:'User Edit - Clinic App', data_UsersToEjs:data_Users, pesanError: null})
  })
})

router.post('/edit/:id', (req,res) =>{
  const username = req.body.username_edit_ejs
  const password = req.body.password_edit_ejs
  const role     = req.body.role_edit_ejs
  model.User.update({
    username : username,
    password : password,
    role     : role
  },{where:{id: req.params.id}}).then(function(data_Users){
    res.redirect('../../user')
  })
})

// DELETE
router.get('/delete/:id', (req,res) =>{
  model.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(data_Users) {
    res.redirect('../../user')
  })
})

module.exports = router;
