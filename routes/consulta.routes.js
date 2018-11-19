var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Consulta.findAll()
        .then(consultas => res.json(consultas))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Consulta.findByPk(req.params.id)
        .then(consulta => res.json(consulta))
        .catch(error => res.json(error));
});

module.exports = router;