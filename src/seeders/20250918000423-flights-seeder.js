'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      { id: 1, flightNumber: 'UK 808', airplaneId: 2, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-02-28 23:00:00'), departureTime: new Date('2025-02-28 19:30:00'), price: 1000, boardingGate: null, totalSeats: 90, createdAt: new Date('2025-08-29 10:30:28'), updatedAt: new Date('2025-09-02 09:41:50') },
      { id: 2, flightNumber: 'UK 808', airplaneId: 3, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-02-28 23:00:00'), departureTime: new Date('2025-02-28 19:30:00'), price: 1000, boardingGate: null, totalSeats: 5, createdAt: new Date('2025-08-29 12:04:24'), updatedAt: new Date('2025-09-09 11:43:37') },
      { id: 3, flightNumber: 'sukhoi 30 mki', airplaneId: 1, departureAirportId: 'BLR', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-02-28 23:00:00'), departureTime: new Date('2025-02-28 19:30:00'), price: 1000, boardingGate: null, totalSeats: 138, createdAt: new Date('2025-08-29 12:05:17'), updatedAt: new Date('2025-09-09 13:17:52') },
      { id: 4, flightNumber: 'RAFALE', airplaneId: 1, departureAirportId: 'DCH', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-02-28 23:00:00'), departureTime: new Date('2025-02-28 19:30:00'), price: 1000, boardingGate: null, totalSeats: 90, createdAt: new Date('2025-08-29 12:06:04'), updatedAt: new Date('2025-09-04 06:26:35') },
      { id: 5, flightNumber: 'MIG30', airplaneId: 2, departureAirportId: 'DCH', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-03-01 23:00:00'), departureTime: new Date('2025-02-28 19:30:00'), price: 1000, boardingGate: null, totalSeats: 0, createdAt: new Date('2025-08-30 10:22:26'), updatedAt: new Date('2025-09-16 12:44:11') },
      { id: 6, flightNumber: 'Rocket', airplaneId: 2, departureAirportId: 'DCH', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-03-11 23:00:00'), departureTime: new Date('2025-03-10 19:30:00'), price: 1000, boardingGate: null, totalSeats: 70, createdAt: new Date('2025-08-30 10:48:10'), updatedAt: new Date('2025-09-15 11:43:22') },
      { id: 7, flightNumber: 'Rocket', airplaneId: 2, departureAirportId: 'DCH', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-03-12 04:30:00'), departureTime: new Date('2025-03-11 01:00:00'), price: 1000, boardingGate: null, totalSeats: 100, createdAt: new Date('2025-08-30 11:04:20'), updatedAt: new Date('2025-08-30 11:04:20') },
      { id: 8, flightNumber: 'Rocket', airplaneId: 2, departureAirportId: 'DCH', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-03-12 04:30:00'), departureTime: new Date('2025-03-11 01:00:00'), price: 1000, boardingGate: null, totalSeats: 100, createdAt: new Date('2025-08-30 11:34:14'), updatedAt: new Date('2025-08-30 11:34:14') },
      { id: 9, flightNumber: 'Rocket', airplaneId: 2, departureAirportId: 'DCH', arrivalAirportId: 'NGA', arrivalTime: new Date('2025-03-12 04:30:00'), departureTime: new Date('2025-03-11 01:00:00'), price: 2000, boardingGate: null, totalSeats: 100, createdAt: new Date('2025-08-30 11:44:53'), updatedAt: new Date('2025-08-30 11:44:53') },
      { id: 10, flightNumber: 'Rocket', airplaneId: 2, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-03-12 11:30:00'), departureTime: new Date('2025-03-12 11:00:00'), price: 20200, boardingGate: null, totalSeats: 90, createdAt: new Date('2025-09-08 07:14:34'), updatedAt: new Date('2025-09-16 15:20:05') },
      { id: 11, flightNumber: 'Vistara', airplaneId: 4, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-03-12 09:00:00'), departureTime: new Date('2025-03-12 05:30:00'), price: 20200, boardingGate: null, totalSeats: 100, createdAt: new Date('2025-09-08 07:32:23'), updatedAt: new Date('2025-09-08 07:32:23') },
      { id: 12, flightNumber: 'Indigo', airplaneId: 4, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-03-12 09:00:00'), departureTime: new Date('2025-03-12 05:30:00'), price: 20, boardingGate: null, totalSeats: 99, createdAt: new Date('2025-09-08 07:33:14'), updatedAt: new Date('2025-09-10 18:38:12') },
      { id: 13, flightNumber: 'AirAsia', airplaneId: 4, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-03-12 09:00:00'), departureTime: new Date('2025-03-12 05:30:00'), price: 20000, boardingGate: null, totalSeats: 2, createdAt: new Date('2025-09-08 07:35:46'), updatedAt: new Date('2025-09-08 08:52:19') },
      { id: 14, flightNumber: 'Indigo', airplaneId: 2, departureAirportId: 'BLR', arrivalAirportId: 'BASP', arrivalTime: new Date('2025-09-12 07:00:00'), departureTime: new Date('2025-09-12 05:30:00'), price: 200, boardingGate: null, totalSeats: 198, createdAt: new Date('2025-09-09 09:22:32'), updatedAt: new Date('2025-09-17 19:11:54') },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flights', { id: { [Op.in]: [1,2,3,4,5,6,7,8,9,10,11,12,13,14] } });
  }
};
