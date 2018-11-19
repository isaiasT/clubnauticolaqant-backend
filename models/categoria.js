'use strict';
module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
        nombre: DataTypes.STRING(50)
    }, {});
    Categoria.associate = function(models) {
        // associations can be defined here
    };
    return Categoria;
};