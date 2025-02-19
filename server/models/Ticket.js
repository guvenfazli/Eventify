const { Sequelize, DataTypes, literal } = require('sequelize')
const sequelize = require('../utils/database')

const Ticket = sequelize.define('ticket', {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ticketQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ticketPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Ticket