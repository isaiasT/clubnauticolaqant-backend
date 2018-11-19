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
        nombre
    } = req.body;

    model.Categoria.create({
            nombre: nombre
        }).then(categoria => res.status(201).json({
            error: false,
            data: categoria,
            message: 'Categoria creada.'
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

    model.Categoria.update({
            nombre: nombre
        }, {
            where: {
                id: id
            }
        })
        .then(categoria => res.json({
            error: false,
            message: 'Categoria actualizada.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Categoria.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Categoria borrada.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;