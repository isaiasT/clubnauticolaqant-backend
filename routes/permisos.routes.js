var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Permisos.findAll()
        .then(permisos => res.json(permisos))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Permisos.findByPk(req.params.id)
        .then(permisos => res.json(permisos))
        .catch(error => res.json(error));
});

module.exports = router;