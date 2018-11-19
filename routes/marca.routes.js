var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Marca.findAll()
        .then(marcas => res.json(marcas))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Marca.findByPk(req.params.id)
        .then(marca => res.json(marca))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        nombre
    } = req.body;
    model.Marca.create({
            nombre: nombre
        }).then(marca => res.status(201).json({
            error: false,
            data: marca,
            message: 'Marca creada.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;