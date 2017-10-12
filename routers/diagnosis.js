let express = require('express');
let router = express.Router();
let model = require('../models');

// --------------------------- * basic CRUD * ---//

// CREATE
router.get('/add', (req,res) => {
  model.Diagnosis.findAll().then(data_Diagnosis => {
    res.render('diagnosis-add', {title:'Diagnosis CLinic App', data_DiagnosisToEjs:data_Diagnosis, pesanError: null})
  })
})

router.post('/add', (req,res) => {
  model.Diagnosis.create({
    penyakit : req.body.penyakit_ejs,
  }).then(data_Diagnosis => {
    res.redirect('../../diagnosis')
  })
})

// READ
router.get('/', (req,res) => {
  model.Diagnosis.findAll().then(data_Diagnosis => {
    res.render('diagnosis', {title: 'Diagnosis CLinic App', data_DiagnosisToEjs:data_Diagnosis})
  })
})

// UPDATE
router.get('/edit/:id', (req,res) => {
  model.Diagnosis.findById(req.params.id).then(data_Diagnosis => {
    res.render('diagnosis-edit', {title:'Edit CLinik App', data_DiagnosisToEjs:data_Diagnosis})
  })
})

router.post('/edit/:id', (req,res) => {
  model.Diagnosis.update({
    penyakit : req.body.penyakit_edit_ejs
  },{where : {id:req.params.id}}).then(data_Diagnosis =>{
    res.redirect('../../diagnosis')
  })
})

// DELETE
router.get('/delete/:id', (req,res) => {
  model.Diagnosis.destroy({where:{id:req.params.id}}).then( data_Diagnosis => {
    res.redirect('../../diagnosis')
  })
})

router.get('/search', (req, res) => {
  model.Diagnosis.findAll({
    where: {'$penyakit$': {$iLike: '%'+req.query.penyakit+'%'}}
  }).then((data) => {
    res.render('searchdiagnosis', {data: data})
  })
})

router.get('/daftarpasien/:id', (req, res) => {
  model.Periksa.findAll({include:[model.Pasien, model.Diagnosis, model.Dokter], where:{DiagnosisId:req.params.id}}).then((data) => {
    //res.send(data)
    res.render('daftarpasien', {data: data})
  })
})

module.exports = router;
