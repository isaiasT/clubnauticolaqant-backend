var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Pais.findAll()
        .then(paises => res.json(paises))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Pais.findByPk(req.params.id)
        .then(pais => res.json(pais))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        nombre
    } = req.body;

    model.Pais.create({
            nombre: nombre
        }).then(pais => res.status(201).json({
            error: false,
            data: pais,
            message: 'Pais creado.'
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

    model.Pais.update({
            nombre: nombre
        }, {
            where: {
                id: id
            }
        })
        .then(pais => res.json({
            error: false,
            message: 'Pais actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Pais.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Pais borrado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;