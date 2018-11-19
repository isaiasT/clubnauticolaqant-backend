'use strict';
module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
        nombre: DataTypes.STRING(50),
        lugar: DataTypes.STRING(50),
        descripcion: DataTypes.TEXT,
        url: DataTypes.STRING(50),
        ruta_imagen: DataTypes.STRING(50)
    }, {});
    Evento.associate = function(models) {
        Evento.belongsTo(models.Usuario, { foreignKey: 'creador' });
    };
    return Evento;
};