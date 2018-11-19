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

module.exports = router;