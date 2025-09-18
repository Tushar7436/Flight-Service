'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { id: 1, name: 'newyork', createdAt: new Date('2025-08-27 13:32:45'), updatedAt: new Date('2025-08-27 13:32:45') },
      { id: 2, name: 'new delhi', createdAt: new Date('2025-08-27 13:40:24'), updatedAt: new Date('2025-08-27 13:40:24') },
      { id: 3, name: 'banglore', createdAt: new Date('2025-08-27 13:40:33'), updatedAt: new Date('2025-08-27 13:40:33') },
      { id: 4, name: 'wowpur', createdAt: new Date('2025-08-30 12:05:23'), updatedAt: new Date('2025-08-30 12:05:23') },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', { id: { [Op.in]: [1, 2, 3, 4] } });
  }
};
