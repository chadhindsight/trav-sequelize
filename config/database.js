const Sequelize = require('sequelize');

// Establishes connection configurations to the specified db
module.exports = new Sequelize('codegig', 'me', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});