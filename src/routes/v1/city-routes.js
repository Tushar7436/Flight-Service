const express = require('express');

const { CityController } = require('../../controllers');
const { Citymiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/city POST
router.post('/',
    Citymiddlewares.validateCreateRequest,
    CityController.createCity
);

// /api/v1/city 
router.get('/',
    CityController.getAllCity
);


module.exports= router;