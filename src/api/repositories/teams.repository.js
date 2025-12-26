const { Team } = require('../../models');

exports.findAll = async () => {
    return await Team.findAll();
}