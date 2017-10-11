let express = require('express');
let router = express.Router();
let model = require('../models');

// Read Data Dokter url: /dokter
router.get('/', (req, res) => {
  model.Dokter.findAll().then((data) => {
    res.render('dokter', {title: 'Daftar Dokter', data_DokterToEjs: data})
  })
})

// Add Data Dokter url: /dokter/add
router.get('/add', (req, res) => {
  res.render('dokteradd', {title: 'Tambah Dokter'})
})

// Post Data Dokter url: /dokter/add
router.post('/add', (req, res) => {
  model.Dokter.create({name: req.body.name, spesialis: req.body.spesialis, jeniskelamin: req.body.jeniskelamin}).then(() => {
    res.redirect('/dokter')
  })
})

// Edit Data Dokter url: /dokter/edit/:id
router.get('/edit/:id', (req, res) => {
  model.Dokter.findOne({where: {id: req.params.id}}).then((data) => {
    res.render('dokteredit', {title: 'Edit Dokter', data_DokterToEjs: data})
  })
})

// Post Edit Data Dokter url: /dokter/edit/:id
router.post('/edit/:id', (req, res) => {
  model.Dokter.update({name: req.body.name, spesialis: req.body.spesialis, jeniskelamin: req.body.jeniskelamin}, {where:{id: req.params.id}}).then(() => {
    res.redirect('/dokter')
  })
})

//Delete Data Dokter url: /dokter/delete/:id
router.get('/delete/:id', (req, res) => {
  model.Dokter.destroy({where: {id:req.params.id}}).then(() => {
    res.redirect('/dokter')
  })
})


module.exports = router;
