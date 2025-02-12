exports.throwError = (statusCode, errorMsg) => {
  const error = new Error(errorMsg)
  error.statusCode = statusCode
  throw error
}

