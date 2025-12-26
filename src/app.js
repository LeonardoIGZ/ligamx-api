require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./api/routes');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./docs/swagger.json');

const app = express();

app.use(cors());
app.use(express.json());

// swagger docs 
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

//api routes
app.use('/api', routes);

// health check
app.get('/', (req, res) => {
    res.json({ message: 'Liga Mx API is now running...' })
})

module.exports = app;