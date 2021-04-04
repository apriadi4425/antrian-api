'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DataAntrians', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tanggal: {
        type: Sequelize.DATE
      },
      nomor: {
        type: Sequelize.INTEGER
      },
      meja_id: {
        type: Sequelize.INTEGER
      },
      meja_nama: {
        type: Sequelize.STRING
      },
      telpon: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DataAntrians');
  }
};