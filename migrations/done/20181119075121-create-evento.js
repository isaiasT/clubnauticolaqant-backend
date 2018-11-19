'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Evento', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            creador: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Usuario', key: 'id' }
            },
            nombre: {
                type: Sequelize.STRING(50)
            },
            lugar: {
                type: Sequelize.STRING(50)
            },
            descripcion: {
                type: Sequelize.TEXT
            },
            url: {
                type: Sequelize.STRING(50)
            },
            ruta_imagen: {
                type: Sequelize.STRING(50)
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
        return queryInterface.dropTable('Evento');
    }
};