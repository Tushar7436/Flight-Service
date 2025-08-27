const { StatusCodes } = require('http-status-codes')
const { AirportService } = require('../services');

const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
* POST : /airports
* req-body {name:""}
*/

async function createAirport(req, res) {
    try{
        const response = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
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
* GET : /airports/
* req-body {}
*/

async function getAirports(req,res){
    try{
        const response = await AirportService.getAllAirports();
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
* GET : /airport/:id
* req-body {}
*/

async function getAirport(req,res){
    try{
        const response = await AirportService.getAirport(req.params.id);
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
* DELETE : /airport/:id
* req-body {}
*/

async function destroyAirport(req,res){
    try{
        const response = await AirportService.destroyAirport(req.params.id);
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
* UPDATE : /airport/:id
* req-body {}
*/

async function updateAirport(req, res) {
    try {
        const response = await AirportService.updateAirport(req.params.id, {
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}