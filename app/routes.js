var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/api/contacts', function(req, res) {
  res.sendFile(__dirname+'/lib/contacts.json');
});

module.exports = router;
