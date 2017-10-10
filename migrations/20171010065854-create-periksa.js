'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Periksas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PasienId: {
        type: Sequelize.INTEGER
      },
      DokterId: {
        type: Sequelize.INTEGER
      },
      DiagnosisId: {
        type: Sequelize.INTEGER
      },
      tglperiksa: {
        type: Sequelize.DATE
      },
      catatandokter: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Periksas');
  }
};