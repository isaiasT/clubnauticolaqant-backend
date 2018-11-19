var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Usuario.findAll()
        .then(usuarios => res.json(usuarios))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Usuario.findByPk(req.params.id)
        .then(usuario => res.json(usuario))
        .catch(error => res.json(error));
});

router.post('/', api, function(req, res) {
    const {
        usuario,
        password,
        email,
        nombre,
        apellidos,
        nif_cif,
        cod_postal,
        localidad,
        pais,
        permisos
    } = req.body;

    model.Usuario.create({
            usuario: usuario,
            password: password,
            email: email,
            nombre: nombre,
            apellidos: apellidos,
            nif_cif: nif_cif,
            cod_postal: cod_postal,
            localidad: localidad,
            pais: pais,
            permisos: permisos
        }).then(usuario => res.status(201).json({
            error: false,
            data: usuario,
            message: 'Usuario creado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.put('/:id', function(req, res) {

    const id = req.params.id;

    const {
        usuario,
        password,
        email,
        nombre,
        apellidos,
        nif_cif,
        cod_postal,
        localidad,
        pais,
        permisos
    } = req.body;

    model.Usuario.update({
            usuario: usuario,
            password: password,
            email: email,
            nombre: nombre,
            apellidos: apellidos,
            nif_cif: nif_cif,
            cod_postal: cod_postal,
            localidad: localidad,
            pais: pais,
            permisos: permisos
        }, {
            where: {
                id: id
            }
        })
        .then(usuario => res.json({
            error: false,
            message: 'Usuario actualizado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

router.delete('/:id', function(req, res) {
    const id = req.params.id;

    model.Usuario.destroy({
            where: {
                id: id
            }
        })
        .then(status => res.json({
            error: false,
            message: 'Usuario borrado.'
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
});

module.exports = router;