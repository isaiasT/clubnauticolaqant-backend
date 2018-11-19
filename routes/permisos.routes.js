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

router.post('/', api, function(req, res) {
    const {
        nombre
    } = req.body;

    model.Permisos.create({
            nombre: nombre
        }).then(permisos => res.status(201).json({
            error: false,
            data: permisos,
            message: 'Permisos creado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.put('/:id', function(req, res) {

    const id = req.params.id;

    const {
        nombre
    } = req.body;

    model.Permisos.update({
            nombre: nombre
        }, {
            where: {
                id: id
            }
        })
        .then(permisos => res.json({
            error: false,
            message: 'Permisos actualizados.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;