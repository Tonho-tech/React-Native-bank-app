const Sequelize = require('sequelize')
const sequelize = require('./db')
const database = require('./db')

const User = database.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    preco:{
        type: Sequelize.DECIMAL
    },
    descricao:{
        type: Sequelize.STRING
    }
})

module.exports = User