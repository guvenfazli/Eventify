const { validationResult } = require('express-validator')
const { throwError } = require('../utils/throwError')
const Event = require('../models/Event')
const dayjs = require('dayjs')

exports.createEvent = async (req, res, next) => {

  const { title, category, startDate, endDate, startTime, endTime, location, description, eventType, ticketQuantity, ticketPrice, imageURL } = req.body

  const uploadedFile = req.files[0] ? req.files[0] : undefined
  const convertedQuantity = +ticketQuantity
  const convertedPrice = +ticketPrice
  const convertedDate = dayjs(new Date(startDate)).unix()
  const convertedEndDate = endDate ? dayjs(new Date(endDate)).unix() : undefined

  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      throwError(410, errors.array()[0].msg)
    }

    if (!uploadedFile) {
      throwError(410, "Please upload an image for your event!")
    } else if (convertedEndDate && isNaN(convertedEndDate)) {
      throwError(410, "Please choose a valid end date!")

    }

    if (eventType === "paid") {
      if (isNaN(convertedQuantity) || isNaN(convertedPrice) || isNaN(convertedDate)) {
        throwError(410, "Please enter numeric values for quantity and price!")
      }
    }


    const createdEvent = await Event.create({
      title,
      category,
      startDate: convertedDate,
      endDate: +convertedEndDate || 0,
      startTime,
      endTime,
      location,
      description,
      eventType,
      ticketQuantity: +ticketQuantity || 0,
      ticketPrice: +ticketPrice || 0,
      imageURL: uploadedFile.path
    })

    res.status(200).json({ message: 'Event successfully created!' })

  } catch (err) {
    next(err)
  }

}

