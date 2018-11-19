'use strict';
module.exports = (sequelize, DataTypes) => {
    const Alquiler_amarre = sequelize.define('Alquiler_amarre', {
        fecha_inicio: DataTypes.DATEONLY,
        fecha_fin: DataTypes.DATEONLY
    }, {});
    Alquiler_amarre.associate = function(models) {
        Alquiler_amarre.belongsTo(models.Amarre, { foreignKey: 'amarre' });
        Alquiler_amarre.belongsTo(models.Usuario, { foreignKey: 'usuario' });
    };
    return Alquiler_amarre;
};