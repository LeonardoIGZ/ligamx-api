const service = require('../services/venues.service');
const http = require('../../utils/httpResponse');

exports.getAllVenues = async (req, res) => {
    try {
        const venues = await service.getAllVenues();
        return http.success(res, venues);
    } catch (error) {
        return http.error(res, error);
    }
}