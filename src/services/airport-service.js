const { StatusCodes } = require('http-status-codes');

const { AirportRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')


const airportRepository = new AirportRepository();

async function createAirport(data){
    try {
        const response = await airportRepository.create(data);
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
        throw new AppError('Canot create a new airport object from services', StatusCodes.INTERNAL_SERVER_ERROR);
    }
} 


async function getAllAirports(){
    try{
        const response = await airportRepository.getAll();
        return response;
    }catch(error){
        throw new AppError('Can not fetch the data for this flight from sevices', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirport(id){
    try{
        const response = await airportRepository.get(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('This airport you have requested is not present',error.statusCode);
        }
        throw new AppError('Can not fetch all the data of airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyAirport(id){
    try{
        const response = await airportRepository.destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('This airport you have requested to delete is not present',error.statusCode);
        }
        throw new AppError('Can not fetch all the data of airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirport(id, data){
    try {
        const airport = await airportRepository.update(id, data);
        return airport;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The airport you requested to update is not present", error.statusCode);
        }
        throw new AppError("Cannot fetch data of the required airports", StatusCodes.NOT_FOUND);
    }

}

module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport,
    updateAirport
}

