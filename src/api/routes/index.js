const { Router } = require("express");

const teamsRoutes = require('./teams.routes');
const matchesRoutes = require('./matches.routes');
const standingsRoutes = require('./standings.routes');

const router = Router();

router.use('/teams', teamsRoutes);
router.use('/matches', matchesRoutes);
router.use('/standings', standingsRoutes);

module.exports = router;