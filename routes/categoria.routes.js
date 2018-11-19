var express = require('express');
var router = express.Router();
var model = require('../models/index');
var api = require('../api_key');

router.get('/', api, function(req, res) {
    model.Categoria.findAll()
        .then(categorias => res.json(categorias))
        .catch(error => res.json(error));
});

router.get('/:id', api, function(req, res) {
    model.Categoria.findByPk(req.params.id)
        .then(categoria => res.json(categoria))
        .catch(error => res.json(error));
});

module.exports = router;