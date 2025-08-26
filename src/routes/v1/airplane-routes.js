const express = require('express');

const { AirplaneController } = require('../../controllers');
const { Airplanemiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/airplane POST
router.post('/',
    Airplanemiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);


module.exports = router;