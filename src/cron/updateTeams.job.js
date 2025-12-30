/**
 * @fileoverview This module contains the logic for sinchronizing soccer team data
 * from the external API to the local database
 * It uses the API functions and the data normalizer.
 * 
 * @requires ../models ORM modules (Team, Venue).
 * @requires ../external/index Function fetchTeams to obtain team data.
 * @requires ../normamlizers/index Function normalizeTeams and  normalizeVenues to standardize the data format.
 */

const { Team, Venue } = require('../models');
const { fetchTeams } = require('../external/index');
const { normalizeTeams, normalizeVenues } = require('../normalizers/index');

/**
 * Updates the list of the teams in the DB.
 * 
 * This process performs the following steps;
 * 1. Obtains raw team data from the external API('fetchTeams').
 * 2. Normalizes the obtained data to fit the local schema('normalizedTeams').
 * 3. Iterates over the normalized data and uses the ORMs 'upsert' method 
 * to insert new teams and venues or update existing ones.
 * 
 * @async
 * @module
 * @return {Promise<void>} A promise that resolves when all teams have been 
 * successfully updated or inserted into the database.
 * @throws {Error} Any error that occurs during API data retrival,
 * normalization, or database operation (upsert)
 */

module.exports = async function updateTeams() {
    // obtain raw API data and normalize
    const response = await fetchTeams();
    const teamsData = normalizeTeams(response.data.response);
    const venueData = normalizeVenues(response.data.response);

    for(const v of venueData){
        await Venue.upsert({
            external_id: v.id,
            name: v.name,
            city: v.city,
            capacity: v.capacity,
            image_url: v.image_url
        });
    }
    console.log('✔ Venues updated.');

    for (const t of teamsData) {
        await Team.upsert({
            external_id: t.id,
            name: t.name,
            short_name: t.short_name,
            logo_url: t.logo_url,
            venue_fk: t.venue_id
        });
    };
    console.log('✔ Teams updated.');
}