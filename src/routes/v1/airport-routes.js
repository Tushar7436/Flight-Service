const express = require('express');

const { AirportController } = require('../../controllers');
const { Airportmiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/airplane POST
router.post('/',
    Airportmiddlewares.validateCreateRequest,
    AirportController.createAirport
);

// /api/v1/airplanes GET
router.get('/',
    AirportController.getAirports
);

// /api/v1/airplane/:id GET
router.get('/:id',
    AirportController.getAirport
);

// /api/v1/airplane/:id delete
router.delete('/:id',
    AirportController.destroyAirport
);

// /api/v1/airplanes/:id PATCH
router.patch("/:id", 
        AirportController.updateAirport);

module.exports = router;