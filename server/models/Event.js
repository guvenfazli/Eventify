const { Sequelize, DataTypes, literal } = require('sequelize')
const sequelize = require('../utils/database')
const Event = sequelize.define("event", {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  interested: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  startDate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  endDate: {
    type: DataTypes.INTEGER,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  eventType: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ticketQuantity: {
    type: DataTypes.INTEGER,
  },
  ticketPrice: {
    type: DataTypes.INTEGER,
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Event
