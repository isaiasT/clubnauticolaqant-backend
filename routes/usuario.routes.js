var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Usuario.findAll()
        .then(usuarios => res.json(usuarios))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Usuario.findByPk(req.params.id)
        .then(usuario => res.json(usuario))
        .catch(error => res.json(error));
});

module.exports = router;