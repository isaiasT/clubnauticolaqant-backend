var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Evento.findAll()
        .then(eventos => res.json(eventos))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Evento.findByPk(req.params.id)
        .then(evento => res.json(evento))
        .catch(error => res.json(error));
});

module.exports = router;