const Sequelize = require('sequelize');
const db = require('../config/database');

const Notes = db.define('notes', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
}, { timestamps: false });

module.exports = Notes;