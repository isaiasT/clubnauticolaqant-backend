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

router.put('/:id', function(req, res) {

    const id = req.params.id;

    const {
        precio,
        tipo
    } = req.body;

    model.Invernaje.update({
            precio: precio,
            tipo: tipo
        }, {
            where: {
                id: id
            }
        })
        .then(invernaje => res.json({
            error: false,
            message: 'Invernaje actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Invernaje.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Invernaje borrado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;