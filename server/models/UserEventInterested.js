const { Sequelize, DataTypes, literal } = require('sequelize')
const sequelize = require('../utils/database')

const UserEventInterested = sequelize.define("userEventInterested", {
  id: {
    type: DataTypes.UUID,
    defaultValue: literal('gen_random_uuid()'),
    primaryKey: true,
  }
})

module.exports = UserEventInterested