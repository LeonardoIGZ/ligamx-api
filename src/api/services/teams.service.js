const repository = require('../repositories/teams.repository');

exports.getAllTeams = async () => {
    return await repository.findAll();
}