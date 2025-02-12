const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../utils/database')

const Session = sequelize.define('session', {
  sid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  userId: DataTypes.INTEGER,
  userName: DataTypes.STRING,
  expires: DataTypes.DATE,
  data: DataTypes.TEXT,
})

exports.extendDefaultFields = (defaults, session) => {
  return {
    data: defaults.data,
    expires: defaults.expires,
    userId: session.userId,
    userName: session.userName
  };
}

