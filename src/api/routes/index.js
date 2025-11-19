const { Router } = require("express");


const teamsRoutes = require('');
const matchesRoutes = require('');
const standingsRoutes = require('');

const router = Router();

router.use('/teams');
router.use('/matches');
router.use('/standings');

module.exports = router;