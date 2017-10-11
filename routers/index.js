let express = require('express');
let router = express.Router();
let model = require('../models');

router.get('/',(req,res)=>{
  model.Dokter.findAll().then(data_Dokter => {
    model.Pasien.findAll().then(data_Pasien =>{
      res.render('index',{data_DokterToEjs:data_Dokter, data_PasienToEjs:data_Pasien, title:'Home Clinic App'})
    })
  })
})


module.exports = router;
