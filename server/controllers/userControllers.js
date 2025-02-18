const { throwError } = require('../utils/throwError')
const Event = require('../models/Event')

exports.fetchTrendingAroundTheWorldEvents = async (req, res, next) => {

  const page = req.query.page

  try {
    const foundEvents = await Event.findAll({ limit: page })
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

exports.fetchSingleEvent = async (req, res, next) => {
  const eventId = req.params.eventId

  try {

    const foundEvent = await Event.findByPk(eventId)

    if (!foundEvent) {
      throwError(404, "We could not find that event.")
    }

    res.status(200).json({ event: foundEvent })

  } catch (err) {
    next(err)
  }
}