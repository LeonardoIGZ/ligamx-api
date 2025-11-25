const axios = require('axios');
/**
 * @fileoverview This configures and handles requests to the external API
 * to obtain data related to soccer teams.
 * It uses the 'axios' library for HTTPS comunication.
 * @requires axios
 * @requires ../config/apiConfig
 */

const { baseURL, apiKey } = require('../config/apiConfig');

/**
 * Axiso instance configured to interact with the soccer API.
 * Includes the baseURL and authentication headers.
 * @type {import('axios').AxiosInstance}
 */
const api = axios.create({
    baseURL,
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
});

/**
 * Retrives the list of teams participating in Liga MX for a given season
 * using the API-Football service hosted on RapidAPI.
 * 
 * This function send an GET request to '/v3/teams' with league and season parameters.
 * Liga MX corresponds to league ID 262.
 * 
 * @async
 * @function getTeams
 * @returns {Promise<Object[]>} A promise that resolves to an array of team objects.
 * 
 * @throws {Error} Throws an error if the external request api fails.
 */
exports.getTeams = async () => {
    const LEAGUE_ID = 262; // liga mx
    const SEASON = 2025;

    const res = await api.get('/v3/teams', {
        params: { league: LEAGUE_ID, season: SEASON }
    });

    return res.data.response;
};

