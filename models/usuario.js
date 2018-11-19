'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        usuario: DataTypes.STRING(100),
        password: DataTypes.STRING(100),
        email: DataTypes.STRING(100),
        nombre: DataTypes.STRING(100),
        apellidos: DataTypes.STRING(100),
        nif_cif: DataTypes.STRING(100),
        cod_postal: DataTypes.MEDIUMINT,
        localidad: DataTypes.STRING(50)
    }, { tableName: 'Usuario' });
    Usuario.associate = function(models) {
        // associations can be defined here
        Usuario.belongsTo(models.Pais, { foreignKey: 'pais' });
        Usuario.belongsTo(models.Permisos, { foreignKey: 'permisos' });
    };
    return Usuario;
};