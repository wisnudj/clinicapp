let express = require('express');
let router = express.Router();
let model = require('../models');

router.get('/',(req,res)=>{
  res.render('index',{title:'Home Clinic App'})
})


module.exports = router;
