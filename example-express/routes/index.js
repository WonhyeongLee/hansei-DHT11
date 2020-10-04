var express = require('express');
var router = express.Router();
var maria = require('../maria');
var sql = 'SELECT * FROM collect_data ORDER BY collect_time DESC LIMIT 10';
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    data: 'main page'
  });
});

router.get('/all', function (req, res) {
  maria.query(sql, function (err, rows) {
    if (err) {
      console.log('error: ', err.message);
      res.send(err);
    } else {
      res.render('../views/part/all.ejs', {
        data: rows
      });
    }
  })
});

router.get('/temp_c', function (req, res) {
  maria.query(sql, function (err, rows) {
    if (err) {
      console.log('error: ', err.message);
      res.send(err);
    } else {
      res.render('../views/part/temp_c.ejs', {
        data: rows
      });
    }
  })
});

router.get('/temp_f', function (req, res) {
  maria.query(sql, function (err, rows) {
    if (err) {
      console.log('error: ', err.message);
      res.send(err);
    } else {
      res.render('../views/part/temp_f.ejs', {
        data: rows
      });
    }
  })
});

router.get('/humid', function (req, res) {
  maria.query(sql, function (err, rows) {
    if (err) {
      console.log('error: ', err.message);
      res.send(err);
    } else {
      res.render('../views/part/humid.ejs', {
        data: rows
      });
    }
  })


});



module.exports = router;