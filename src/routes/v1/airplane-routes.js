const express = require('express');

const { AirplaneController } = require('../../controllers');
const { Airplanemiddlewares } = require('../../middlewares')
const router = express.Router();

// /api/v1/airplane POST
router.post('/',
    Airplanemiddlewares.validateCreateRequest,
    AirplaneController.createAirplane
);

// /api/v1/airplanes GET
router.get('/',
    AirplaneController.getAirplanes
);

// /api/v1/airplane/:id GET
router.get('/:id',
    AirplaneController.getAirplane
);

// /api/v1/airplane/:id delete
router.delete('/:id',
    AirplaneController.destroyAirplane
);

// /api/v1/airplanes/:id PATCH
router.patch("/:id", 
        AirplaneController.updateAirplane);

module.exports = router;