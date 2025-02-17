const { throwError } = require('../utils/throwError')
const Event = require('../models/Event')

exports.fetchTrendingAroundTheWorldEvents = async (req, res, next) => {

  try {
    const foundEvents = await Event.findAll()

    if (foundEvents.length <= 0) {
      throwError("No events found!")
    }

    res.status(200).json({ foundEvents })
    return;
  } catch (err) {
    next(err)
  }


}