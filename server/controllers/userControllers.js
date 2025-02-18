const { throwError } = require('../utils/throwError')
const User = require('../models/User')
const Event = require('../models/Event')
const UserEventInterested = require('../models/UserEventInterested')
const { Op } = require('sequelize')

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

exports.beInterested = async (req, res, next) => {
  const userId = req.session.userInfo.userId
  const eventId = req.params.eventId

  try {

    if (!userId) {
      throwError(410, "Please log in first!")
    } else if (!eventId) {
      throwError(410, "Event does not exist!")
    }

    const foundUser = await User.findByPk(userId, { include: Event })
    const foundEvent = await Event.findByPk(eventId)
    const alreadytInterested = foundUser.events.some((event) => event.id === eventId)
    if (alreadytInterested) {
      await UserEventInterested.destroy({ where: { userId, eventId } })
      foundEvent.interested -= 1
      foundEvent.save()
      res.status(200).json({ message: "You are not interested anymore!" })
      return;
    }

    const interested = await foundUser.addEvent(foundEvent)

    if (!interested) {
      throwError(404, 'Something went wrong!')
    }

    foundEvent.interested += 1
    await foundEvent.save()

    res.status(200).json({ message: "You are now interested!" })
    return;
  } catch (err) {
    next(err)
  }

}

exports.fetchSimilarEvents = async (req, res, next) => {
  const { location, category, id } = req.query

  try {

    const similarEvents = await Event.findAll({
      where:
      {
        [Op.or]:
          [{ location }, { category }],
        [Op.not]: [{ id }]
      }
    })

    if (similarEvents.length === 0) {
      throwError(404, "Could not find any similar event!")
    }

    res.status(200).json({ similarEvents })
    return
  } catch (err) {
    next(err)
  }

}