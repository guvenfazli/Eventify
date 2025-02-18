const { validationResult } = require('express-validator')
const { throwError } = require('../utils/throwError')
const Event = require('../models/Event')
const dayjs = require('dayjs')

exports.createEvent = async (req, res, next) => {

  const { title, category, startDate, endDate, location, description, eventType, ticketQuantity, ticketPrice } = req.body
  const uploadedFile = req.files[0] ? req.files[0] : undefined
  const convertedQuantity = +ticketQuantity
  const convertedPrice = +ticketPrice


  // Adding startDates as timestamp integers, in order to do checking on frontend.
  const todaysDate = dayjs(new Date()).unix()

  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      throwError(410, errors.array()[0].msg)
    }

    if (!uploadedFile) {
      throwError(410, "Please upload an image for your event!")
    } else if (endDate && isNaN(+endDate)) {
      throwError(410, "Please choose a valid end date!")

    }

    if (todaysDate > +startDate || isNaN(+startDate)) {
      throwError(410, "Please choose a valid date!")
    }

    if (eventType === "paid") {
      if (isNaN(convertedQuantity) || isNaN(convertedPrice) || isNaN(+startDate)) {
        throwError(410, "Please enter numeric values for quantity and price!")
      }
    }


    const createdEvent = await Event.create({
      title,
      category,
      startDate: +startDate,
      endDate: +endDate || 0,
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

