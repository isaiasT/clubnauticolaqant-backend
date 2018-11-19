var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Embarcacion.findAll()
        .then(embarcaciones => res.json(embarcaciones))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Embarcacion.findByPk(req.params.id)
        .then(embarcacion => res.json(embarcacion))
        .catch(error => res.json(error));
});

module.exports = router;