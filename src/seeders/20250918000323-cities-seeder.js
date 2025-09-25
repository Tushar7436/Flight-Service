'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      { id: 1, name: 'Bengaluru', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Mumbai', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'New Delhi', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Hyderabad', createdAt: new Date(), updatedAt: new Date() },
      { id: 5, name: 'Kolkata', createdAt: new Date(), updatedAt: new Date() },
      { id: 6, name: 'Chennai', createdAt: new Date(), updatedAt: new Date() },
      { id: 7, name: 'Kochi', createdAt: new Date(), updatedAt: new Date() },
      { id: 8, name: 'Pune', createdAt: new Date(), updatedAt: new Date() },
      { id: 9, name: 'Ahmedabad', createdAt: new Date(), updatedAt: new Date() },
      { id: 10, name: 'Goa', createdAt: new Date(), updatedAt: new Date() },
      { id: 11, name: 'Patna', createdAt: new Date(), updatedAt: new Date() },
      { id: 12, name: 'Varanasi', createdAt: new Date(), updatedAt: new Date() },
      { id: 13, name: 'Bhubaneswar', createdAt: new Date(), updatedAt: new Date() },
      { id: 14, name: 'Amritsar', createdAt: new Date(), updatedAt: new Date() },
      { id: 15, name: 'Port Blair', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }
    });
  }
};
