'use strict';
module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define('Marca', {
        nombre: DataTypes.STRING(50)
    }, {});
    Marca.associate = function(models) {
        // associations can be defined here
    };
    return Marca;
};