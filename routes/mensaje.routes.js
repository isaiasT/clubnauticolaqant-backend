var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Mensaje.findAll()
        .then(mensajes => res.json(mensajes))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Mensaje.findByPk(req.params.id)
        .then(mensaje => res.json(mensaje))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        mensaje,
        emisor,
        receptor
    } = req.body;
    model.Mensaje.create({
            mensaje: mensaje,
            emisor: emisor,
            receptor: receptor
        }).then(mensaje => res.status(201).json({
            error: false,
            data: mensaje,
            message: 'Mensaje creado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;