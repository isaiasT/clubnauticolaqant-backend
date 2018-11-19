'use strict';
module.exports = (sequelize, DataTypes) => {
    const Alquiler_invernaje = sequelize.define('Alquiler_invernaje', {
        fecha_inicio: DataTypes.DATEONLY,
        fecha_fin: DataTypes.DATEONLY
    }, { tableName: 'Alquiler_invernaje' });
    Alquiler_invernaje.associate = function(models) {
        Alquiler_invernaje.belongsTo(models.Invernaje, { foreignKey: 'invernaje' });
        Alquiler_invernaje.belongsTo(models.Usuario, { foreignKey: 'usuario' });
    };
    return Alquiler_invernaje;
};