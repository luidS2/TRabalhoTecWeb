var express = require('express');
var connection = require('./mysqlConnection');
var formidable = require('formidable');
var base64 = require('file-base64');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('cadastro', { logado: req.session.email });
});

router.post('/', function (req, res, next) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        base64.encode(files.imagem.path, function (err, base64String) {
            var sql = "INSERT INTO `pjsoftware02`.`Eventos` (`Titulo`, `Descricao`, `Data`, `Local`, `Imagem`) VALUES ?";
            var values = [[fields.titulo, fields.descricao, fields.data, fields.local, base64String]];
            connection.query(sql, [values]);
            res.redirect('/');
        });
    });
});

module.exports = router;