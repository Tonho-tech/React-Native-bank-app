const Sequelize = require('sequelize')
const sequelize = new Sequelize('asadvogadosmb', 'Antonio', 'Antonio30',{
    dialect: 'mysql',
    host: 'localhost',
})

module.exports = sequelize