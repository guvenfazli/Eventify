const dotenv = require('dotenv')
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('eventify', 'root', process.env.DB_PW, { dialect: 'mysql' })

module.exports = sequelize