const apiFootball = require('./apiFootball.client');

/**
 * Retrives the list of stadiums in Mexico
 * using the API-Footbal service.
 * 
 * This fucntion send an GET request to'/venues' with country parameter.
 * 
 * @async
 * @fucntion getVenues
 * @returns {Promise<Object[]>} A promise that resolves to an array of venue objects.
 * 
 * @throws {Error} Throws an error if the external request api fails.
 */
const getVenues = async () => {
    try {
        const res = await apiFootball.get('/venues', {
            params: { country: 'Mexico' }, timeout: 7000
        });
        return res;
    } catch (error) {
        throw new Error('Error obtaining stadiums data from Mexico');
    }
};

module.exports = {
    getVenues
}