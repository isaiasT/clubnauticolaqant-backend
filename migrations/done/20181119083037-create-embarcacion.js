'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Embarcacion', {
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
            descripcion: {
                type: Sequelize.TEXT
            },
            categoria: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Categoria', key: 'id' }
            },
            marca: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Marca', key: 'id' }
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
        return queryInterface.dropTable('Embarcacion');
    }
};