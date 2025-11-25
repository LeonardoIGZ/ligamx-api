/**
 * @typeof {Object} TeamAPIReponse - Structure of a team element in the raw API Response.
 * @property {Object} team
 * @property {number} team.id The ID of the team in the api
 * @property {string} team.name The full name of the team
 * @property {string} team.code The short code or acronym of the team
 * @property {string} team.logo the URL of the team logo
 * @property {Object} venue
 * @property {number} venue.id The ID of the stadium/venue
 */

/**
 * @typedef {Object} NormalizedTeam - Structure of the team  obsject after normalization
 * @property {string} id - The team name (maped from object.team.name)
 * @property {string} name - The team code (mapped from obj.team.code)
 * @property {string} short_name - The team cede (maped from obj.team.code) 
 * @property {string} logo_url - The URL of the team logo (mapped from obj.team.logo)
 * @property {number} venue_id - The ID of the team's venue (mapped from obj.venue.id)
 */

/**
 * Normalizes and maps the raw APi team response to a simple more consistent object format
 * @exports
 * @param {Array<TeamAPIResponse>} teamsResponse - An array of team objects with the raw APi structures.
 * @returns {Array<NormalizedTeam>} An array of the normalized team objects
 * 
 */

exports.normalizeTeams = (teamsResponse) => {
    return teamsResponse.map(obj => ({
        id: obj.team.id,
        name: obj.team.name,
        short_name: obj.team.code,
        logo_url: obj.team.logo,
        venue_id: obj.venue.id
    }));
}