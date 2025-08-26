const { StatusCodes } = require('http-status-codes')
const { AirplaneService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
* POST : /airplanes
* req-body {modelNUmber: 'airbus320', capacity: 200}
*/

async function createAirplane(req, res) {
    try{
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
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
* GET : /airplanes/
* req-body {}
*/

async function getAirplanes(req,res){
    try{
        const response = await AirplaneService.getAllAirplanes();
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

/**
* GET : /airplanes/:id
* req-body {}
*/

async function getAirplane(req,res){
    try{
        const response = await AirplaneService.getAirplane(req.params.id);
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

/**
* DELETE : /airplanes/:id
* req-body {}
*/

async function destroyAirplane(req,res){
    try{
        const response = await AirplaneService.destroyAirplane(req.params.id);
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

/**
* UPDATE : /airplanes/:id
* req-body {}
*/

async function updateAirplane(req, res) {
    try {
        const response = await AirplaneService.updateAirplane(req.params.id, {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.ACCEPTED)
                .json(SuccessResponse);
    } catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}