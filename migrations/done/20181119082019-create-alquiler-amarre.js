'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Alquiler_amarre', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            amarre: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Amarre', key: 'id' }
            },
            fecha_inicio: {
                type: Sequelize.DATEONLY
            },
            fecha_fin: {
                type: Sequelize.DATEONLY
            },
            usuario: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Usuario', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Alquiler_amarre');
    }
};