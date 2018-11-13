'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('Pais', {
    nombre: DataTypes.STRING
  }, {});
  Pais.associate = function(models) {
    // associations can be defined here
  };
  return Pais;
};