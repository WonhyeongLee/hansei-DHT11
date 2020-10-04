var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'raspi_user',
  password: '1q2w3e4r',
  database: 'raspi_dht11'
})

connection.connect();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    data: 'Express'
  });
});

router.get('/temp_c', function (req, res, next) {
  var data = 'SELECT * FROM collect_data ORDER BY time DESC LIMIT 50';
  connection.query(data, function (err, rows) {
    if (error) {
      console.log('error: ', error.message);
    } else {
      res.send(ejs.render('index', {
        data: 'success'
      }))

    }
  })

  res.render('index', {
    data: 'btn1'
  });

});

router.get('/temp_f', function (req, res, next) {



});

router.get('/humid', function (req, res, next) {


});



module.exports = router;