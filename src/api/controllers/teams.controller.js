const service = require('../services/teams.service');
const http = require('../../utils/httpResponse');

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await service.getAllTeams();
        return http.success(res, teams);
    } catch (error) {
        return http.error(res, error);
    }
}