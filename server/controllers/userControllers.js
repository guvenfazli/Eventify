const { throwError } = require('../utils/throwError')
const User = require('../models/User')
const Event = require('../models/Event')
const Ticket = require('../models/Ticket')
const UserEventInterested = require('../models/UserEventInterested')
const UserTicket = require('../models/UserTicket')
const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')
const { Op, Sequelize } = require('sequelize')
const dayjs = require('dayjs')
const { validationResult } = require('express-validator')
const sequelize = require('../utils/database')


exports.fetchTrendingAroundTheWorldEvents = async (req, res, next) => {

  const page = req.query.page

  try {
    const foundEvents = await Event.findAll({ limit: page, order: [['interested', 'DESC']] })
    if (foundEvents.length <= 0) {
      throwError(404, "No events found!")
    }

    res.status(200).json({ foundEvents })
    return;
  } catch (err) {
    next(err)
  }
}

exports.fetchUpcomingEvents = async (req, res, next) => {
  const { page, days } = req.query
  const todaysTimestamp = dayjs().startOf('day')
  const calculatedDate = dayjs(todaysTimestamp.add(+days, 'd')).startOf('day').unix()

  try {

    const upcomingList = await Event.findAll({ where: { startDate: { [Op.between]: [dayjs(todaysTimestamp).unix(), calculatedDate] } }, limit: +page })

    if (upcomingList.length === 0) {
      if (+days === 0) {
        throwError(404, "There is no upcoming events today, sorry!")
      } else if (+days === 2) {
        throwError(404, "There is no upcoming events tomorrow, sorry!")
      } else {
        throwError(404, "There is no upcoming events this week, sorry!")

      }
    }

    res.status(200).json({ upcomingList })
    return;
  } catch (err) {
    next(err)
  }
}

exports.fetchBestFreeEvents = async (req, res, next) => {
  const { page } = req.query

  try {

    const freeList = await Event.findAll({ where: { eventType: "free" }, limit: +page, order: [['interested', 'DESC']] })

    if (freeList.length === 0) {
      throwError(404, "There is no free event at the moment, sorry!")
    }

    res.status(200).json({ freeList })
    return;
  } catch (err) {
    next(err)
  }
}

exports.fetchSingleEvent = async (req, res, next) => {
  const eventId = req.params.eventId

  try {

    const foundEvent = await Event.findByPk(eventId, { include: Ticket })

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

exports.buyTicket = async (req, res, next) => {
  const ticketId = req.params.ticketId
  const userId = req.session.userInfo.userId
  const { fullName, email, phone, ticketQuantity, totalPrice } = req.body
  const errors = validationResult(req)
  const convertedQuantity = +ticketQuantity

  try {

    if (!errors.isEmpty()) {
      throwError(410, errors.array()[0].msg)
    }

    const foundTicket = await Ticket.findByPk(ticketId)

    if (!foundTicket) {
      throwError(404, 'Ticket could not found!')
    } else if (convertedQuantity === 0) {
      throwError(410, 'Please at least choose one ticket!')
    } else if (foundTicket.ticketQuantity === 0) {
      throwError(410, 'Tickets are sold out already!')
    } else if (convertedQuantity > foundTicket.ticketQuantity) {
      throwError(410, 'There is not that much ticket left!')
    }

    const anotherPayment = await UserTicket.findOne({ where: { ticketId: ticketId, userId: userId } })

    if (anotherPayment) {
      await sequelize.transaction(async (t) => {
        anotherPayment.totalPrice += +totalPrice
        anotherPayment.totalQuantity += convertedQuantity
        foundTicket.ticketQuantity -= convertedQuantity
        await Promise.all([
          foundTicket.save({ transaction: t }),
          anotherPayment.save({ transaction: t })
        ]);
      })

      const doc = new PDFDocument()

      const folderPath = path.resolve(__dirname, '..', 'invoices')
      const filePath = path.join(folderPath, `${foundTicket.eventId}.pdf`)

      doc.pipe(fs.createWriteStream(filePath))
      doc.text('----------')
      doc.text(`Your Ticket Invoice for ${foundTicket.title} X ${anotherPayment.totalQuantity += convertedQuantity} = ${anotherPayment.totalPrice += +totalPrice} EUR`)
      doc.text('Thank you for choosing Eventify!')
      doc.text('----------')
      doc.end()

      res.status(200).json({ message: 'Thank you for choosing Eventify!' })
      return;
    }


    const boughtTicket = await UserTicket.create({
      fullName,
      email,
      phone,
      totalPrice: +totalPrice,
      totalQuantity: convertedQuantity,
      userId,
      ticketId
    })

    foundTicket.ticketQuantity -= convertedQuantity
    await foundTicket.save()

    const doc = new PDFDocument()

    const folderPath = path.resolve(__dirname, '..', 'invoices')
    const filePath = path.join(folderPath, `${boughtTicket.id}.pdf`)

    doc.pipe(fs.createWriteStream(filePath))
    doc.text('----------')
    doc.text(`Your Ticket Invoice for ${boughtTicket.title} X ${boughtTicket.totalQuantity} = ${boughtTicket.totalPrice} EUR`)
    doc.text('Thank you for choosing Eventify!')
    doc.text('----------')
    doc.end()

    res.status(200).json({ message: 'Thank you for choosing Eventify!' })
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
      },
      limit: 12
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

exports.fetchMyTickets = async (req, res, next) => {
  const userId = req.session.userInfo.userId

  try {
    const foundUser = await User.findByPk(userId, { include: Ticket })

    if (foundUser.tickets.length === 0) {
      throwError(404, 'You do not have any tickets!')
    }

    res.status(200).json({ tickets: foundUser.tickets })
    return;

  } catch (err) {
    next(err)
  }
}

exports.getInvoice = async (req, res, next) => {
  const invoiceId = req.params.invoiceId
  const folderPath = path.resolve(__dirname, '..', 'invoices')
  const filePath = path.join(folderPath, `${invoiceId}.pdf`)
  const readStream = fs.createReadStream(filePath)
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline')
  readStream.pipe(res)
}

exports.interestedEvents = async (req, res, next) => {
  const userId = req.session.userInfo.userId
  const { filter, direction } = req.query

  try {
    const foundUser = await User.findByPk(userId, { include: [{ model: Event }], order: [[{ model: Event }, filter, direction]] })

    if (!foundUser) {
      throwError(404, "Could not find the user!")
    } else if (foundUser.events.length === 0) {
      throwError(404, "You have no interested events at the moment!")
    }

    res.status(200).json({ interestedEvents: foundUser.events })
  } catch (err) {
    next(err)
  }
}

exports.searchEvents = async (req, res, next) => {
  const filterOptions = req.query
  const filterArray = Object.entries(filterOptions).filter(([key, value]) => value !== 'null' && key !== 'category' && value !== 'undefined')
  const filterObject = Object.fromEntries(filterArray)
  const categoryArray = filterOptions.category.split(',')
  const todaysDate = dayjs(new Date).startOf('day')
  const addedExtraDays = todaysDate.add(+filterObject.startDate, 'day').unix()

  try {

    const whereObject = {}

    if (filterObject.eventType) {
      whereObject.eventType = filterObject.eventType
    }

    if (filterObject.location) {
      whereObject.location = filterObject.location
    }

    if (filterObject.srch) {
      whereObject.title = { [Op.substring]: filterObject.srch }
    }

    if (filterObject.startDate) {
      whereObject.startDate = { [Op.between]: [todaysDate.unix(), addedExtraDays] }
    }

    if (filterObject.category) {
      whereObject.category = { [Op.or]: categoryArray }
    }

    const filteredEvents = await Event.findAll({
      where: whereObject, order: [['startDate', 'ASC']]
    })

    if (filteredEvents.length === 0) {
      throwError(404, 'No event with these filters found!')
    }

    res.status(200).json({ filteredEvents })

  } catch (err) {
    next(err)
  }
}