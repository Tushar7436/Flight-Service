'use strict';
const { Op } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [
      {
        id: 1,
        flightNumber: 'AI 501',
        airplaneId: 9, // Airbus A320neo
        departureAirportId: 'BLR',
        arrivalAirportId: 'DEL',
        arrivalTime: new Date('2025-10-01 09:30:00'),
        departureTime: new Date('2025-10-01 06:00:00'),
        price: 5500,
        boardingGate: 'A12',
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        flightNumber: '6E 203',
        airplaneId: 10, // Airbus A320neo
        departureAirportId: 'DEL',
        arrivalAirportId: 'BOM',
        arrivalTime: new Date('2025-10-01 12:00:00'),
        departureTime: new Date('2025-10-01 09:30:00'),
        price: 4800,
        boardingGate: 'B22',
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        flightNumber: 'UK 808',
        airplaneId: 11, // Airbus A321neo
        departureAirportId: 'BOM',
        arrivalAirportId: 'BLR',
        arrivalTime: new Date('2025-10-01 20:30:00'),
        departureTime: new Date('2025-10-01 18:00:00'),
        price: 4200,
        boardingGate: 'C14',
        totalSeats: 230,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        flightNumber: 'SG 123',
        airplaneId: 12, // Boeing 737-800
        departureAirportId: 'HYD',
        arrivalAirportId: 'CCU',
        arrivalTime: new Date('2025-09-29 11:00:00'),
        departureTime: new Date('2025-09-29 08:30:00'),
        price: 5600,
        boardingGate: 'D05',
        totalSeats: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        flightNumber: 'I5 302',
        airplaneId: 13, // ATR 72-600
        departureAirportId: 'PNQ',
        arrivalAirportId: 'GOI',
        arrivalTime: new Date('2025-09-29 14:00:00'),
        departureTime: new Date('2025-09-29 12:30:00'),
        price: 3500,
        boardingGate: 'E07',
        totalSeats: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        flightNumber: 'QP 1101',
        airplaneId: 9, // Boeing 737-800
        departureAirportId: 'AMD',
        arrivalAirportId: 'DEL',
        arrivalTime: new Date('2025-09-29 10:30:00'),
        departureTime: new Date('2025-09-29 08:00:00'),
        price: 4000,
        boardingGate: 'F04',
        totalSeats: 189,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        flightNumber: 'AK 452',
        airplaneId: 10, // Airbus A320neo
        departureAirportId: 'MAA',
        arrivalAirportId: 'BLR',
        arrivalTime: new Date('2025-10-03 08:15:00'),
        departureTime: new Date('2025-10-03 07:00:00'),
        price: 2500,
        boardingGate: 'G09',
        totalSeats: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        flightNumber: 'AI 776',
        airplaneId: 11, // Boeing 787-8 Dreamliner
        departureAirportId: 'CCU',
        arrivalAirportId: 'DEL',
        arrivalTime: new Date('2025-10-03 19:30:00'),
        departureTime: new Date('2025-10-03 16:15:00'),
        price: 7200,
        boardingGate: 'H02',
        totalSeats: 256,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flights', {
      id: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
    });
  },
};
