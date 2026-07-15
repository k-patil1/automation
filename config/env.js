const dotenv = require('dotenv');

const env = process.env.ENV || 'dev';

dotenv.config({
  path: `config/.env.${env}`,
});

module.exports = {
  baseURL: process.env.BASE_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  apiURL: process.env.API_URL,
};