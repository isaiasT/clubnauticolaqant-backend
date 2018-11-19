var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Pais.findAll()
        .then(paises => res.json(paises))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Pais.findByPk(req.params.id)
        .then(pais => res.json(pais))
        .catch(error => res.json(error));
});

module.exports = router;