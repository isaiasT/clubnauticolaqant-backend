var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Consulta.findAll()
        .then(consultas => res.json(consultas))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Consulta.findByPk(req.params.id)
        .then(consulta => res.json(consulta))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        consulta,
        respuesta,
        respondida,
        usuario
    } = req.body;
    model.Consulta.create({
            consulta: consulta,
            respuesta: respuesta,
            respondida: respondida,
            usuario: usuario
        }).then(consulta => res.status(201).json({
            error: false,
            data: consulta,
            message: 'Consulta creada.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;