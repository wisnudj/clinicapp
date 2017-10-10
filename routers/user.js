let express = require('express');
let router = express.Router();
let model = require('../models');

// router.get('/', (req,res)=>{
//   model.User.findAll().then( data_Users =>{
//     res.send(data_Users)
//     // res.render('user', {title:'Users Clinic App', data_UserToEjs:data_Users})
//   })
// })

module.exports = router;
