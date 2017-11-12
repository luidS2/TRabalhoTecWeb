var express = require('express');
var connection = require('./mysqlConnection');
var formidable = require('formidable');
var base64 = require('file-base64');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', { logado: req.session.email });
});

router.post('/', function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if (fields.email == "admin@admin.com" && fields.senha == "admin123") {
            req.session.email = "admin@admin.com";
            res.redirect('/');
        }
        else {
            res.render('login', { msg: "Login incorreto", logado: req.session.email });
        }
    });
});

module.exports = router;