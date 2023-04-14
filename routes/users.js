var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 127.0.0.1:3000/users/login 會接收
router.get('/login', function(req, res, next) {
  res.status(200).json({
    "name":"login"
  })
});


module.exports = router;
