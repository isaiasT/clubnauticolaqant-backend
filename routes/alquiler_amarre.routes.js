var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Alquiler_amarre.findAll()
        .then(alquileres => res.json(alquileres))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Alquiler_amarre.findByPk(req.params.id)
        .then(alquiler => res.json(alquiler))
        .catch(error => res.json(error));
});

module.exports = router;