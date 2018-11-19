'use strict';
module.exports = (sequelize, DataTypes) => {
    const Mensaje = sequelize.define('Mensaje', {
        mensaje: DataTypes.TEXT
    }, {});
    Mensaje.associate = function(models) {
        Mensaje.belongsTo(models.Usuario, { foreignKey: 'emisor' });
        Mensaje.belongsTo(models.Usuario, { foreignKey: 'receptor' });
    };
    return Mensaje;
};