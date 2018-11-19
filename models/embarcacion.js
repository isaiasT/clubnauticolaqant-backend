'use strict';
module.exports = (sequelize, DataTypes) => {
    const Embarcacion = sequelize.define('Embarcacion', {
        nombre: DataTypes.STRING,
        descripcion: DataTypes.TEXT,
        ruta_imagen: DataTypes.STRING
    }, { tableName: 'Embarcacion' });
    Embarcacion.associate = function(models) {
        Embarcacion.belongsTo(models.Usuario, { foreignKey: 'creador' });
        Embarcacion.belongsTo(models.Categoria, { foreignKey: 'categoria' });
        Embarcacion.belongsTo(models.Marca, { foreignKey: 'marca' });
    };
    return Embarcacion;
};