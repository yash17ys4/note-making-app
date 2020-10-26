const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, { timestamps: false });

module.exports = Users;