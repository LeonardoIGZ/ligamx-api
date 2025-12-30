const { Router } = require('express');
const controller = require('../controllers/venues.controller');

const router = Router();

router.get('/', controller.getAllVenues);

module.exports = router;