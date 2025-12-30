const { Venue } = require('../../models');

exports.findAll = async () => {
    return await Venue.findAll();
}