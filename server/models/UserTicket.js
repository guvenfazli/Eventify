const { Sequelize, DataTypes, literal } = require('sequelize')
const sequelize = require('../utils/database')

const UserTicket = sequelize.define('userTicket', {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = UserTicket