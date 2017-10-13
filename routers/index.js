let express = require('express');
let router = express.Router();
let model = require('../models');


// SESSION
router.use(function(req,res,next){
	// console.log(req.session)
	if(req.session && req.session.hasOwnProperty('username')){
		next()
	}else{
		res.redirect('/login')
	}
})

// GET
router.get('/',(req,res)=>{
  model.Dokter.findAll().then(data_Dokter => {
    model.Pasien.findAll().then(data_Pasien =>{
      res.render('index',{
				data_DokterToEjs:data_Dokter,
				data_PasienToEjs:data_Pasien,
				title:'Home Clinic App',
				session:req.session
			})
    })
  })
})


module.exports = router;
