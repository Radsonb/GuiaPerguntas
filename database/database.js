const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '2108',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection