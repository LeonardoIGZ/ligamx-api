/**
 * @typeof {Object} TeamAPIReponse - Structure of a team element in the raw API Response.
 * @property {Object} venue
 * @property {number} venue.id The ID of the stadium in the api
 * @property {string} venue.name The full name of the stadium
 * @property {string} venue.city The city name of the location of the stadium
 * @property {number} venue.capacity The number capacity of the stadium
 * @property {string} venue.image_url the URL of the stadium
 */

/**
 * @typedef {Object} NormalizedVenue - Structure of the venue object after normalization
 * @property {string} id - The venue ID in the api (mapped from object.venue.id)
 * @property {string} name - The venue full name (mapped from obj.venue.name)
 * @property {string} city - The venue city location (mapped from obj.venue.city)
 * @property {number} capacity - The venue capacity of assistance (mapped from obj.venue.capacity)
 * @property {string} image_url - The URL of the team stadium (mapped from obj.venue.image_url)
 */

/**
 * Normalizes and maps the raw APi team response to a simple more consistent object format
 * @exports
 * @param {Array<TeamAPIResponse>} teamsResponse - An array of team objects with the raw API structures.
 * @returns {Array<NormalizedVenue>} An array of the normalized venue objects
 */
const normalizeVenues = (venuesResponse) => {
    return venuesResponse.map(obj => ({
        id: obj.venue.id,
        name: obj.venue.name,
        city: obj.venue.city,
        capacity: obj.venue.capacity,
        image_url: obj.venue.image_url
    }));
}

module.exports = {
    normalizeVenues
}