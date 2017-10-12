let express = require('express');
let router = express.Router();
let model = require('../models');

// Read Data Pasien url: /pasien
router.get('/', (req, res) => {
  model.Pasien.findAll().then((data) => {
    console.log(data);
    res.render('pasien', {title: 'Daftar Pasien', data_pasienToEjs: data})
  })
})

// Add Data Pasien url: /pasien/add
router.get('/add', (req, res) => {
  res.render('pasienadd', {title: 'Tambah Pasien'})
})

// Post Add Data Pasien url: /pasien/add
router.post('/add', (req, res) => {
  model.Pasien.create({name: req.body.name, jeniskelamin: req.body.jeniskelamin, usia: req.body.usia, pekerjaan:req.body.pekerjaan, alamat:req.body.alamat}).then(() => {
    res.redirect('/pasien')
  })
})

// Edit Data Pasien url: /pasien/edit/:id
router.get('/edit/:id', (req, res) => {
  model.Pasien.findOne({where: {id: req.params.id}}).then((data) => {
    res.render('pasienedit', {title: 'Edit Pasien', data_pasienToEjs: data})
  })
})

// Post Edit Data Pasien url: /pasien/edit/:id
router.post('/edit/:id', (req, res) => {
  model.Pasien.update({name: req.body.name, jeniskelamin: req.body.jeniskelamin, usia: req.body.usia, pekerjaan:req.body.pekerjaan, alamat:req.body.alamat}, {where: {id: req.params.id}}).then(() => {
    res.redirect('/pasien')
  })
})

// Delete Data Pasien url: /pasien/delete/:id
router.get('/delete/:id', (req, res) => {
  model.Pasien.destroy({where: {id: req.params.id}}).then(() => {
    res.redirect('/pasien')
  })
})

router.get('/riwayat/:id', (req, res) => {
  model.Periksa.findAll({include:[model.Pasien, model.Diagnosis, model.Dokter], where:{PasienId:req.params.id}}).then((data) => {
    //res.send(data)
    res.render('riwayat', {data: data})
  })

})


router.get('/search', (req, res) => {
  model.Pasien.findAll({
    where: {'$name$': {$iLike: '%'+req.query.name+'%'}}
  }).then((data) => {
    res.render('searchpasien', {data: data})
  })
})




module.exports = router;
