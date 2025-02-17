const { throwError } = require('../utils/throwError')
const Event = require('../models/Event')

exports.fetchTrendingAroundTheWorldEvents = async (req, res, next) => {

  const page = req.query.page
  const limit = 6
  try {
    const foundEvents = await Event.findAll({ offset: page, limit: limit })
    console.log(foundEvents)
    if (foundEvents.length <= 0) {
      throwError(404, "No events found!")
    }

    res.status(200).json({ foundEvents })
    return;
  } catch (err) {
    next(err)
  }


}