const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Team = require('./team.model')(sequelize, Sequelize.DataTypes);
const Venue = require('./venue.model')(sequelize, Sequelize.DataTypes);
// const Match = require('./match.model')(sequelize, Sequelize.DataTypes);
// const Standing = require('./standing.model')(sequelize, Sequelize.DataTypes);
// const Player = require('./player.model')(sequelize, Sequelize.DataTypes);

module.exports = {
    sequelize,
    Team,
    Venue
    // Match,
    // Standing,
    // Player
}