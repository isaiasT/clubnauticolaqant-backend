'use strict';
module.exports = (sequelize, DataTypes) => {
    const Consulta = sequelize.define('Consulta', {
        consulta: DataTypes.TEXT,
        respuesta: DataTypes.TEXT,
        respondida: DataTypes.BOOLEAN
    }, { tableName: 'Consulta' });
    Consulta.associate = function(models) {
        Consulta.belongsTo(models.Usuario, { foreignKey: 'usuario' });
    };
    return Consulta;
};