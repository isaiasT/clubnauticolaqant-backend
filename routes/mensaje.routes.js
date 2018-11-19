var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Mensaje.findAll()
        .then(mensajes => res.json(mensajes))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Mensaje.findByPk(req.params.id)
        .then(mensaje => res.json(mensaje))
        .catch(error => res.json(error));
});

module.exports = router;