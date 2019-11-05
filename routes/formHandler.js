var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.cookie('test-name', req.body.name)
  res.cookie('test-pass', req.body.password)

  res.status(200).send('ok')
});

module.exports = router;
