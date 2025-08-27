const express = require('express');

const { CityController } = require('../../controllers');
const { Citymiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/airplane POST
router.post('/',
    Citymiddlewares.validateCreateRequest,
    CityController.createCity
);

module.exports= router;