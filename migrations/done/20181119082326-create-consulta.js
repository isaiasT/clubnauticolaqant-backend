'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Consulta', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            usuario: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Usuario', key: 'id' }
            },
            consulta: {
                type: Sequelize.TEXT
            },
            respuesta: {
                type: Sequelize.TEXT
            },
            respondida: {
                type: Sequelize.BOOLEAN
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
        return queryInterface.dropTable('Consulta');
    }
};