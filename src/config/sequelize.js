const { sequelize, Sequelize } = require('sequelize');

// connection with sequelize to postgre
const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
        host: process.env.DB_HOST,
        dialect: 'postgres', 
        logging: false
    }
);

module.exports = sequelize;