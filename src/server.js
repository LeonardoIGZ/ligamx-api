const app = require('./app');
const { sequelize } = require('./src/models');
const logger = require('./src/utils/logger');

const PORT = process.env.PORT || 4000;

async function startServer(){
    try {
        console.log('Connecting to database...');
        //await sequelize.authenticate();
        console,log('Database connected');

        app.listen(PORT, ()=> {
            console.log(`Liga MX API running on port ${PORT}`);
        }) 
    } catch (error) {
        logger.error("Error starting server:", error);
        process.exit(1);
    }
}

startServer();