const { Router } = require('express');
const controller =require('../controllers/teams.controller');

const router = Router();

router.get('/', ccontroller.getAllTeams);

module.exports = router;