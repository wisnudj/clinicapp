let express = require('express')
let router = express.Router()
let model = require('../models')

router.get('/', (req, res) => {
  model.Periksa.findAll({include: [model.Pasien, model.Dokter, model.Diagnosis]}).then((data) => {
    res.send(data)
    res.render('periksa', {title: 'Daftar Periksa Pasien', dataPeriksa_ToEjs: data})
  })
})

router.get('/add', (req, res) => {
  res.render('periksaadd', {title: 'Add Periksa Pasien'})
})

router.post('/add', (req, res) => {
  model.Periksa.create({PasienId: req.body.PasienId, DokterId: req.body.DokterId, DiagnosisId: req.body.DiagnosisId, tglperiksa: req.body.tglperiksa, catatandokter: req.body.catatandokter}).then(() => {
    res.redirect('/periksa')
  })
})


module.exports = router
