var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Amarre.findAll()
        .then(amarres => res.json(amarres))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Amarre.findByPk(req.params.id)
        .then(amarre => res.json(amarre))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        precio,
        tipo
    } = req.body;

    model.Amarre.create({
            precio: precio,
            tipo: tipo
        }).then(amarre => res.status(201).json({
            error: false,
            data: amarre,
            message: 'Amarre creado.'
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

    model.Amarre.update({
            precio: precio,
            tipo: tipo
        }, {
            where: {
                id: id
            }
        })
        .then(amarre => res.json({
            error: false,
            message: 'Amarre actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Amarre.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Amarre borrado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;