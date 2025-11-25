const repo = require('../repositories/teams.repository');

exports.getAllTeams = async () => {
    return await repo.findAll();
}