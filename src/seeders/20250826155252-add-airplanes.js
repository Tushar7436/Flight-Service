'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Airbus A320neo',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 737-800',
        capacity: 189,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A321neo',
        capacity: 230,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 787-8 Dreamliner',
        capacity: 256,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'ATR 72-600',
        capacity: 78,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', {
      [Op.or]: [
        { modelNumber: 'Airbus A320neo' },
        { modelNumber: 'Boeing 737-800' },
        { modelNumber: 'Airbus A321neo' },
        { modelNumber: 'Boeing 787-8 Dreamliner' },
        { modelNumber: 'ATR 72-600' }
      ]
    });
  }
};
