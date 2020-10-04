var express = require('express');
var router = express.Router();
var maria = require('../maria');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    data: 'Express'
  });
});

router.get('/temp_c', function (req, res, next) {
  maria.query('select * from collect_data', function (err, rows, fields) {
    if (error) {
      console.log('error: ', error.message);
    } else {
      res.render('index', {
        data: '성공'
      });
      res.send(rows);
    }
  })

});

router.get('/temp_f', function (req, res, next) {



});

router.get('/humid', function (req, res, next) {


});



module.exports = router;