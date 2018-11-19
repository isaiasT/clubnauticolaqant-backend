'use strict';
module.exports = (sequelize, DataTypes) => {
    const Permisos = sequelize.define('Permisos', {
        nombre: DataTypes.STRING(50)
    }, { tableName: 'Permisos' });
    Permisos.associate = function(models) {
        // associations can be defined here
    };
    return Permisos;
};