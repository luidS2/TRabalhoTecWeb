var express = require('express');
var connection = require('./mysqlConnection');
var dateFormat = require('dateformat');
var router = express.Router();

router.get('/', function (req, res, next) {
    connection.query("DELETE FROM Eventos where EventosId = '" + req.id + "'");
    res.redirect('/');
});

module.exports = router;
