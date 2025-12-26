const app = require('./app');
const { sequelize } = require('./models');
const logger = require('./utils/logger');
const startCronJobs = require('./cron/index')

const PORT = process.env.PORT || 4000;

async function startServer(){
    try {
        console.log('Connecting to database...');
        await sequelize.authenticate();
        console.log('Database connected');
        await sequelize.sync();
        startCronJobs();

        app.listen(PORT, ()=> {
            console.log(`Liga MX API running on port ${PORT}`);
        }) 
    } catch (error) {
        logger.error("Error starting server:", error);
        process.exit(1);
    }
}

startServer();