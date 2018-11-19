var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Evento.findAll()
        .then(eventos => res.json(eventos))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Evento.findByPk(req.params.id)
        .then(evento => res.json(evento))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        nombre,
        lugar,
        descripcion,
        url,
        ruta_imagen
    } = req.body;

    model.Evento.create({
            nombre: nombre,
            lugar: lugar,
            descripcion: descripcion,
            url: url,
            ruta_imagen: ruta_imagen
        }).then(evento => res.status(201).json({
            error: false,
            data: evento,
            message: 'Evento creado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.put('/:id', function(req, res) {

    const id = req.params.id;

    const {
        nombre,
        lugar,
        descripcion,
        url,
        ruta_imagen
    } = req.body;

    model.Evento.update({
            nombre: nombre,
            lugar: lugar,
            descripcion: descripcion,
            url: url,
            ruta_imagen: ruta_imagen
        }, {
            where: {
                id: id
            }
        })
        .then(evento => res.json({
            error: false,
            message: 'Evento actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;