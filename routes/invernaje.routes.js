var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Invernaje.findAll()
        .then(invernajes => res.json(invernajes))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Invernaje.findByPk(req.params.id)
        .then(invernaje => res.json(invernaje))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        precio,
        tipo
    } = req.body;
    model.Invernaje.create({
            precio: precio,
            tipo: tipo
        }).then(invernaje => res.status(201).json({
            error: false,
            data: invernaje,
            message: 'Invernaje creado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;