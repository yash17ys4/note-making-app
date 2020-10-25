const Sequelize = require('sequelize');
require('dotenv').config()

//establishing connection with database
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
try {
    db.authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

module.exports = db;