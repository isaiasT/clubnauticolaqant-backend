var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Alquiler_invernaje.findAll()
        .then(alquileres => res.json(alguileres))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Alquiler_invernaje.findByPk(req.params.id)
        .then(alquiler => res.json(alquiler))
        .catch(error => res.json(error));
});

module.exports = router;