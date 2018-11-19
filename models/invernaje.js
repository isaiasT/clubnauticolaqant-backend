'use strict';
module.exports = (sequelize, DataTypes) => {
    const Invernaje = sequelize.define('Invernaje', {
        precio: DataTypes.FLOAT,
        tipo: DataTypes.STRING(50)
    }, {});
    Invernaje.associate = function(models) {
        // associations can be defined here
    };
    return Invernaje;
};