const { validationResult } = require('express-validator')
const { throwError } = require('../utils/throwError')
const Event = require('../models/Event')
const dayjs = require('dayjs')

exports.createEvent = async (req, res, next) => {

  const { title, category, startDate, endDate, startTime, endTime, location, description, eventType, ticketQuantity, ticketPrice, imageURL } = req.body
  console.log(req.body)
  const uploadedFile = req.files[0]
  const convertedQuantity = +ticketQuantity
  const convertedPrice = +ticketPrice
  const convertedDate = dayjs(new Date(startDate)).unix()
  const convertedEndDate = dayjs(new Date(endDate)).unix()

  try {
    const errors = validationResult(req)

    if (!errors.isEmpty) {
      throwError(errors.array()[0].msg, 410)
    }

    if (eventType === "paid") {
      if (isNaN(convertedQuantity) || isNaN(convertedPrice)) {
        throwError("Please enter numeric values for quantity and price!")
      }
    }


/*     const createdEvent = await Event.create({
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
    }) */

    res.status(200).json({ message: 'Event successfully created!' })

  } catch (err) {
    next(err)
  }

}

