/**
 * @fileoverview This module sets up and schedules the recurring background job 
 * to synchronize football team data with the local database.
 * It uses the 'node-cron' library to scheduling.
 * 
 * @requires node-cron library for job scheduling,
 * @requires ./updateTeams.job the module containing the actual update logic.
 */

const cron = require('node-cron');
const updateTeams = require('./updateTeams.job');

/**
 * Schedules the 'updateTeams' job to run periodicallly.
 * 
 * The cron expression '30 * /6 * * *' means the job will run:
 * At the 30th minute of the hour
 * Entry 6 hours (* /6)
 * Every day of the month, every month, every day of the week ( * * * )
 * 
 * This typically translates to running at:  **00:30, 06:30, 12:30, and 18:30** daily.
 * 
 * 
 * @function
 * @async
 * @fires updateTeams
 */

module.exports = function startCronJobs() {
    console.log('🕒 Initializing cron jobs...');
    // every minute
    cron.schedule('* * * * *', async () => {
        console.log('⏳ Running schedule job: updateTeams');
        try {
            await updateTeams();
            console.log('✅ updateTeams job finished');
        } catch (error) {
            console.error('❌ updateTeams job failed:', error.message);
            console.error('❌ ERROR TYPE:', error.name);
            console.error('❌ ERROR MESSAGE:', error.message);
            console.error('❌ ERROR ERRORS:', error.errors);
            throw error;
        }
    });
}