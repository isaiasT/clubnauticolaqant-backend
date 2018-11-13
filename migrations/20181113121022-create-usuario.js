'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Usuario', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            usuario: {
                type: Sequelize.STRING(100)
            },
            password: {
                type: Sequelize.STRING(100)
            },
            email: {
                type: Sequelize.STRING(100)
            },
            nombre: {
                type: Sequelize.STRING(100)
            },
            apellidos: {
                type: Sequelize.STRING(100)
            },
            nif_cif: {
                type: Sequelize.STRING(100)
            },
            cod_postal: {
                type: Sequelize.MEDIUMINT
            },
            localidad: {
                type: Sequelize.STRING(50)
            },
            pais: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                references: { model: 'Pais', key: 'id' }
            },
            permisos: {
                type: Sequelize.TINYINT
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
        return queryInterface.dropTable('Usuario');
    }
};