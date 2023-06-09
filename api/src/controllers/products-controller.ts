import express from 'express'
import getProductAvailability from '../utils/products/get-product-availability'
import getProductInfo from '../utils/products/get-product-info'
import getProducts from '../utils/products/get-products'
import errorHandler from '../utils/error-handler/error-handler'

let router = express.Router()

router.get('/', function (req, res) {
  if (!req.query.category) {
    return errorHandler(res, {
      response: { statusCode: 400 },
      message: 'Please provide category in query string',
    })
  }

  getProducts(req.query.category as string, req.query.page as string)
    .then((resolve) => {
      res.send(resolve)
    })
    .catch((error) => {
      errorHandler(res, error)
    })
})

router.get('/:id([a-zA-Z0-9]{6})', function (req, res) {
  const id = req.params.id

  getProductInfo(id)
    .then((resolve) => {
      return getProductAvailability(id, resolve)
    })
    .then((resolve) => {
      res.send(resolve)
    })
    .catch((error) => {
      errorHandler(res, error)
    })
})

module.exports = router
