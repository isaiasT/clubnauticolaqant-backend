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

router.post('/', api, function(req, res) {
    const {
        fecha_inicio,
        fecha_fin,
        amarre,
        usuario
    } = req.body;

    model.Alquiler_amarre.create({
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            amarre: amarre,
            usuario: usuario
        }).then(alquiler => res.status(201).json({
            error: false,
            data: alquiler,
            message: 'Alquiler_amarre creado.'
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
        amarre,
        usuario
    } = req.body;

    model.Alquiler_amarre.update({
            fecha_inicio: fecha_inicio,
            fecha_fin: fecha_fin,
            amarre: amarre,
            usuario: usuario
        }, {
            where: {
                id: id
            }
        })
        .then(alquiler => res.json({
            error: false,
            message: 'Alquiler_amarre actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;