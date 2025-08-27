const { StatusCodes } = require('http-status-codes');

const { AirplaneRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')


const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const response = await airplaneRepository.create(data);
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
        throw new AppError('Canot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAllAirplanes(){
    try{
        const response = await airplaneRepository.getAll();
        return response;
    }catch(error){
        throw new AppError('Can not fetch the data for this flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplane(id){
    try{
        const response = await airplaneRepository.get(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('This airplane you have requested is not present',error.statusCode);
        }
        throw new AppError('Can not fetch all the data of airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function destroyAirplane(id){
    try{
        const response = await airplaneRepository.destroy(id);
        return response;
    }catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('This airplane you have requested to delete is not present',error.statusCode);
        }
        throw new AppError('Can not fetch all the data of airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function updateAirplane(id, data){
    try {
        const airplane = await airplaneRepository.update(id, data);
        return airplane;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError("The airplane you requested to update is not present", error.statusCode);
        }
        throw new AppError("Cannot fetch data of the required airplanes", StatusCodes.NOT_FOUND);
    }

}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}

