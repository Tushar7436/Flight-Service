const express = require('express');

const { FlightController } = require('../../controllers');
const { Flightmiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/flights POST
router.post('/',
    Flightmiddlewares.validateCreateRequest,
    FlightController.createFlight
);

// /api/v1/flights?trips = MUM-DEL GET
router.get('/',
    FlightController.getAllFlights
);

// /api/v1/flights/:id GET
router.get('/:id',
    FlightController.getFlight
);

// /api/v1/flights/:id/seats patch
router.patch('/:id/seats',
    Flightmiddlewares.validateUpdateRequest,
    FlightController.updateSeats
);

module.exports = router;