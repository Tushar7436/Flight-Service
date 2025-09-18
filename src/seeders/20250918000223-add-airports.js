'use strict';
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      {
        id: 7,
        name: 'DholakPur',
        code: 'BLR',
        address: null,
        cityId: 1,
        createdAt: new Date('2025-08-29 08:43:21'),
        updatedAt: new Date('2025-08-29 08:43:21'),
      },
      {
        id: 12,
        name: 'NagaPuru',
        code: 'NGA',
        address: null,
        cityId: 2,
        createdAt: new Date('2025-08-29 08:45:16'),
        updatedAt: new Date('2025-08-29 08:45:16'),
      },
      {
        id: 14,
        name: 'BasmatiPur',
        code: 'BASP',
        address: null,
        cityId: 2,
        createdAt: new Date('2025-08-29 08:55:20'),
        updatedAt: new Date('2025-08-29 08:55:20'),
      },
      {
        id: 15,
        name: 'dichik',
        code: 'DCH',
        address: 'ABC',
        cityId: 1,
        createdAt: new Date('2025-08-29 09:44:26'),
        updatedAt: new Date('2025-08-29 09:44:26'),
      },
      {
        id: 19,
        name: 'gandhiInternational',
        code: 'GHI',
        address: null,
        cityId: 2,
        createdAt: new Date('2025-08-30 12:24:01'),
        updatedAt: new Date('2025-08-30 12:24:01'),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', {
      id: { [Op.in]: [7, 12, 14, 15, 19] },
    });
  },
};
