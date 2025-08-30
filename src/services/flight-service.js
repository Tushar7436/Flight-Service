const { StatusCodes } = require('http-status-codes');
const { Op } = require('sequelize');
const { FlightRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')


const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        const response = await flightRepository.create(data);
        return response;
    } 
    catch(error){
        if(error.name == 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Canot create a new flight object from services', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllFlights(query) {
    let customFilter = { };
    let sortFilter = [ ];

    //trips = MUM-DEL
    if(query.trips) {
        [departureAirportId, arrivalAirportId] = query.trips.split("-"); 
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
        //TODO: add a check that they are not same
    }
    //price filter
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]:[minPrice, ((maxPrice == undefined) ? 10000000: maxprice)]
        }
    }
    //travellers filter
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }

    // departure date filter
    if (query.tripDate) {
        const startDate = new Date(`${query.tripDate}T00:00:00Z`);
        const endDate = new Date(`${query.tripDate}T23:59:59Z`);
        
        customFilter.departureTime = {
            [Op.between]: [startDate, endDate]
        };
    }

    //SORT
    if(query.sort) {
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters
    }
    console.log(customFilter);
    try{
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights;
    }catch(error){
        console.log(error);
        throw new AppError('Can not fetch all the data for the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
    getAllFlights
}

