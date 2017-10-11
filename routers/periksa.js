let express = require('express')
let router = express.Router()
let model = require('../models')

router.get('/', (req, res) => {
  model.Periksa.findAll({include: [model.Pasien, model.Dokter, model.Diagnosis]}).then((data) => {

    var tanggal = data[0].tglperiksa.toDateString()
    console.log(tanggal);
    res.render('periksa', {title: 'Daftar Periksa Pasien', dataPeriksa_ToEjs: data, tanggal: tanggal})
  })
})

router.get('/add', (req, res) => {
  model.Diagnosis.findAll().then((data) => {
    res.render('periksaadd', {title: 'Add Periksa Pasien', dataDiagnosis: data})
  })
})

router.post('/add', (req, res) => {
  model.Periksa.create({PasienId: req.body.PasienId, DokterId: req.body.DokterId, DiagnosisId: req.body.DiagnosisId, tglperiksa: req.body.tglperiksa, catatandokter: req.body.catatandokter}).then(() => {
    res.redirect('/periksa')
  })
})

router.get('/delete/:id', (req, res) => {
  model.Periksa.destroy({where: {id: req.params.id}}).then(() => {
    res.redirect('/periksa')
  })
})

router.get('/edit/:id', (req, res) => {
  model.Periksa.findOne({where: {id: req.params.id}}).then((dataPeriksa) => {
    model.Diagnosis.findAll().then((dataDiagnosis) => {
      res.render('periksaedit', {title: "Edit Periksa", dataPeriksa_ToEjs: dataPeriksa, dataDiagnosis_To_Ejs: dataDiagnosis})
    })
  })
})

router.post('/edit/:id', (req, res) => {
  model.Periksa.update({PasienId: req.body.PasienId, DokterId: req.body.DokterId, tglperiksa: req.body.tglperiksa, DiagnosisId: req.body.DiagnosisId, catatandokter: req.body.catatandokter}, {where: {id: req.params.id}}).then(() => {
    res.redirect('/periksa')
  })
})

module.exports = router
