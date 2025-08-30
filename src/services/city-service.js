const { StatusCodes } = require('http-status-codes');

const { CityRepository } = require('../repositories')
const AppError = require('../utils/errors/app-error')

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const response = await cityRepository.create(data);
        return response;
    } 
    catch(error){
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') { 
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Canot create a new airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCity(){
    try{
        const response = await cityRepository.getAll();
        return response;
    }catch(error){
        throw new AppError('Can not fetch the data for this city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCity,
    getAllCity
}