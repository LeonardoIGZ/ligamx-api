const { Router } = require('express');
const controller = require('../controllers/teams.controller');
const test = require('../../external/ligaMxApi');
const test2 = require('../../external/dataNormalizer');

const router = Router();

router.get('/', controller.getAllTeams);
// router.get('/test', async (req, res) => {
//     const teams = await test.getTeams();
//     console.log(test2.normalizeTeams(teams.data.response));
//     return res.json({ ok: true, x: teams.data });
// });

module.exports = router;