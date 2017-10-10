let express = require('express');
let router = express.Router();
let model = require('../models');

router.get('/', (req, res) => {
  model.Dokter.findAll().then((data) => {
    res.render('dokter', {title: 'Daftar Dokter', data_DokterToEjs: data})
  })
})

router.get('/add', (req, res) => {
  res.render('dokteradd', {title: 'Tambah Dokter'})
})

//router.post('/add', (req, res) => {
  //model.Dokter.create()
//})


module.exports = router;
