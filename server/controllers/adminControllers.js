exports.createEvent = (req, res, next) => {
  console.log('Worked')
  console.log(req.body)
  console.log(req.files)
  res.json({message: 'test'})
}

