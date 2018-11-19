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

router.post('/', api, function(req, res) {
    const {
        fecha_inicio,
        fecha_fin,
        invernaje,
        usuario
    } = req.body;

    model.Alquiler_invernaje.create({
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            invernaje: invernaje,
            usuario: usuario
        }).then(alquiler => res.status(201).json({
            error: false,
            data: alquiler,
            message: 'Alquiler_invernaje creado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.put('/:id', function(req, res) {

    const id = req.params.id;

    const {
        fecha_inicio,
        fecha_fin,
        invernaje,
        usuario
    } = req.body;

    model.Alquiler_invernaje.update({
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            invernaje: invernaje,
            usuario: usuario
        }, {
            where: {
                id: id
            }
        })
        .then(alquiler => res.json({
            error: false,
            message: 'Alquiler_invernaje actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Alquiler_invernaje.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Alquiler_invernaje borrado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;