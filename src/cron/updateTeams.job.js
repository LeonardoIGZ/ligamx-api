/**
 * @fileoverview This module contaisn the logic for sinchronizing soccer team data
 * from the external API to the local database
 * It uses the API functions and the data normalizer.
 * 
 * @requires ../nodels ORM modules (Team, Venue).
 * @requires ../external/ligaMxApi Function to obtain team data.
 * @requires ../external/dataNormalizer Function to standardize the data format.
 */

const { Team, Venue } = require('../models');
const { getTeams } = require('../external/ligaMxApi');
const { normalizeTeams } = require('../external/dataNormalizer');

/**
 * Updates the list of the teams in the DB.
 * 
 * This process performs the following steps;
 * 1. Obtains raw team data from the external API('getTeams').
 * 2. Normalizes the obtained data to fit the local schema('normalizedTeams').
 * 3. Iterates over the normalized data and uses the ORMs 'upsert' method 
 * to insert new teams or update existing ones.
 * 
 * @async
 * @module
 * @return {Promise<void>} A promise that resolves when all teams have been 
 * successfully updated or inserted into the database.
 * @throws {Error} Any error that occurs during API data retrival,
 * normalization, or database operation (upsert)
 */

module.exports = async function updateTeams() {
    // obtainm raw API data
    const data = await getTeams();
    // normalize data 
    const normalized = normalizeTeams(data);

    for (const t of normalized) {
        await Team.upsert({
            id: t.id,
            name: t.name,
            short_name: t.short_name,
            logo_url: t.logo_url,
            venue_id: t.venue_id
        });
    };

    console.log('✔ Teams updated.');
}