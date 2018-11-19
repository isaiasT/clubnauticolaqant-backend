'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Mensaje', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            emisor: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Usuario', key: 'id' }
            },
            receptor: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Usuario', key: 'id' }
            },
            mensaje: {
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('Mensaje');
    }
};