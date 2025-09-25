const Sequelize = require('sequelize');

const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport } = require('../models');
const db = require('../models');
const { addRowLockOnFlights } = require('./queries');

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include:[
            {
                model:Airplane,
                required: true,
                as: 'airplane_detail'
            },
            {
                model: Airport,
                required: true,
                as:'departure_airport',
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departure_airport.code"))
                },
                include: [
                    {
                        model: db.City,
                        attributes: ['name']
                    }
                ]
            },
            
            {
                model: Airport,
                required: true,
                as:'arrival_airport',
                on: {
                    col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrival_airport.code"))
                },
                include: [
                    {
                        model: db.City,
                        attributes: ['name']
                    }
                ]
            }
        ]
        });
        return response;
    }

    async updateRemainigSeats(flightId, seats, dec = true){
        const transaction = await db.sequelize.transaction();
        try{
            //row lock 
            await db.sequelize.query(addRowLockOnFlights(flightId));
            const flight = await Flight.findByPk(flightId);
            if(+dec){
                await flight.decrement('totalSeats', {by: seats}, {transaction: transaction});
            }else{
                await flight.increment('totalSeats', {by: seats}, {transaction: transaction});
            }

            // const updatedFlight = await Flight.findByPk(flightId);
            await transaction.commit();
            return flight;

        }catch(error){
            await transaction.rollback();
            throw error;
        }
    }
} 


module.exports = FlightRepository;