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

router.post('/', api, function(req, res) {
    const {
        nombre,
        descripcion,
        ruta_imagen,
        creador,
        categoria,
        marca
    } = req.body;

    model.Embarcacion.create({
            nombre: nombre,
            descripcion: descripcion,
            ruta_imagen: ruta_imagen,
            creador: creador,
            categoria: categoria,
            marca: marca
        }).then(embarcacion => res.status(201).json({
            error: false,
            data: embarcacion,
            message: 'Embarcacion creada.'
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
        descripcion,
        ruta_imagen,
        creador,
        categoria,
        marca
    } = req.body;

    model.Embarcacion.update({
            nombre: nombre,
            descripcion: descripcion,
            ruta_imagen: ruta_imagen,
            creador: creador,
            categoria: categoria,
            marca: marca
        }, {
            where: {
                id: id
            }
        })
        .then(embarcacion => res.json({
            error: false,
            message: 'Embarcacion actualizada.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Embarcacion.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Embarcacion borrada.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;