const { StatusCodes } = require('http-status-codes')
const { CityService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
* POST : /cities
* req-body {name:'xyz'}
*/

async function createCity(req, res) {
    try{
        const response = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    } catch(error) {
        ErrorResponse.error = error;
        return res 
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}


/**
* GET : /cities
* req-body {name:'xyz'}
*/

async function getAllCity(req,res){
    try{
        const response = await CityService.getAllCity();
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}


module.exports={
    createCity,
    getAllCity
}