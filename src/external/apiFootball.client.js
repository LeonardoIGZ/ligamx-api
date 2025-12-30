const axios = require('axios');
/**
 * @fileoverview This configures and handles requests to the external API
 * to obtain data related to soccer teams.
 * It uses the 'axios' library for HTTPS comunication.
 * @requires axios
 * @requires ../config/apiConfig
 */

const { baseURL, apiKey } = require('../config/apiConfig');

/**
 * Axios instance configured to interact with the soccer API.
 * Includes the baseURL and authentication headers.
 * @type {import('axios').AxiosInstance}
 */

const api = axios.create({
    baseURL,
    headers: {
        'x-apisports-key': apiKey
    }
});

module.exports = api;