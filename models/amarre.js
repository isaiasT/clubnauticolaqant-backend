'use strict';
module.exports = (sequelize, DataTypes) => {
    const Amarre = sequelize.define('Amarre', {
        precio: DataTypes.FLOAT,
        tipo: DataTypes.STRING(50)
    }, { tableName: 'Amarre' });
    Amarre.associate = function(models) {
        // associations can be defined here
    };
    return Amarre;
};