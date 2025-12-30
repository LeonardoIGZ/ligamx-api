const api = require('./apiFootball.client');
const LEAGUE_ID = 262; // liga mx
const SEASON = 2023;

/**
 * Retrives the list of teams participating in Liga MX for a given season
 * using the API-Football service.
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
const getTeams = async () => {
    try {
        const res = await api.get('/teams', {
            params: { league: LEAGUE_ID, season: SEASON }, timeout: 7000
        });
        return res;
    } catch (error) {
        console.error('❌ getTeams() request failed:', error.message);
        console.error('❌ ERROR TYPE:', error.name);
        console.error('❌ ERROR MESSAGE:', error.message);
        console.error('❌ ERROR ERRORS:', error.errors);
        throw new Error('Error obtaining information from Liga MX teams.');
    }
};

module.exports = {
    getTeams
}
