const dayjs = require("dayjs")

exports.todaysExactTimestamp = (req, res, next) => {
  const todaysTimestamp = dayjs().unix()
  return todaysTimestamp
}