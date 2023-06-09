import store from '..'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_QUANTITY_SELECT,
  PRODUCT_SIZE_SELECT,
} from '../action-types/product-action-types'
import { fetchData } from '../helper-functions'

export const listProducts = (page: any) => async (dispatch: any) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  })

  fetchData(`http://127.0.0.1:8080/products?category=new_arrivals&page=${page}`)
    .then((data) => {
      if (data.products.length === 0) {
        throw new Error('error')
      }
      const promises = data.products.map((p: any) => {
        return fetch(`http://127.0.0.1:8080/products/${p.productId}`).then(
          (response) => response.json()
        )
      })

      Promise.all(promises)
        .then((productsInfoWithPrice) => {
          const productsToDisplay: any = []
          for (let i = 0; i < data.products.length; i++) {
            productsToDisplay.push({
              productId: data.products[i].productId,
              displayName: data.products[i].displayName,
              subTitle: data.products[i].subTitle,
              imageUrl: data.products[i].imageUrl,
              price: productsInfoWithPrice[i].price,
            })
          }

          dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: {
              products: productsToDisplay,
              countOfProducts: data.count,
              pages: Math.ceil(data.count / 48),
            },
          })
        })
        .catch((err) => {
          dispatch({ type: PRODUCT_LIST_FAIL })
        })
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_LIST_FAIL })
    })
}

export const detailsProduct = (productId: any) => async (dispatch: any) => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId })
  try {
    fetchData(`http://127.0.0.1:8080/products/${productId}`)
      .then((data) => {
        if (data.message) {
          throw new Error('error')
        }

        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
      })
      .catch((err) => {
        dispatch({ type: PRODUCT_DETAILS_FAIL })
      })
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL })
  }
}

export const selectProductSize =
  (selectedSize: any, availableQuantity: any) => async (dispatch: any) => {
    const { loading, error, product } = store.getState().productDetails
    dispatch({
      type: PRODUCT_SIZE_SELECT,
      payload: { loading, error, product, selectedSize, availableQuantity },
    })
  }

export const selectProductQuantity =
  (quantity: any) => async (dispatch: any) => {
    const { loading, error, product, selectedSize, availableQuantity } =
      store.getState().productDetails
    dispatch({
      type: PRODUCT_QUANTITY_SELECT,
      payload: {
        loading,
        error,
        product,
        selectedSize,
        availableQuantity,
        selectedQuantity: quantity,
      },
    })
  }
