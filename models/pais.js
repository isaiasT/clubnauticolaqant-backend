'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pais = sequelize.define('Pais', {
        nombre: DataTypes.STRING(50)
    }, { tableName: 'Pais' });
    Pais.associate = function(models) {
        //associations can be defined here
    };
    return Pais;
};