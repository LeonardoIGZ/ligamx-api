const repository = require('../repositories/');

exports.getAllVenues = async () => {
    return await repository.findAll();
}