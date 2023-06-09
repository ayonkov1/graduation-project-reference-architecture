import express from 'express'

const errorHandler = (res: express.Response, error: any) => {
  let responseCode = 500
  let message = 'Internal server error'

  if (
    error.response &&
    (error.response.statusCode === 400 || error.response.statusCode === 404)
  ) {
    responseCode = error.response.statusCode
    if (responseCode === 400) {
      message = 'Bad Request'
    } else {
      message = 'Not Found'
    }
  }

  res.status(responseCode).send({ message })
}

export default errorHandler
