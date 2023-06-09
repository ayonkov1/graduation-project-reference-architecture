import { Action, Reducer } from 'redux'
import { initialState } from '..'
import { initialStateType } from '../../types/state-types'
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_QUANTITY_SELECT,
  PRODUCT_SIZE_SELECT,
} from '../action-types/product-action-types'

export const productListReducer: Reducer<
  initialStateType['productList'],
  Action<void>
> = (state = initialState.productList, action: any) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...initialState.productList, loading: true, error: false }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        error: false,
        products: action.payload.products,
        pages: action.payload.pages,
      }
    case PRODUCT_LIST_FAIL:
      return { ...initialState.productList, loading: false, error: true }
    default:
      return state
  }
}

export const productDetailsReducer: Reducer<
  initialStateType['productDetails'],
  Action<void>
> = (state = initialState.productDetails, action: any) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...initialState.productDetails, loading: true, error: false }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...initialState.productDetails,
        loading: false,
        error: false,
        product: action.payload,
      }
    case PRODUCT_SIZE_SELECT:
      return {
        ...initialState.productDetails,
        selectedQuantity: 0,
        availableQuantity: action.payload.availableQuantity,
        selectedSize: action.payload.selectedSize,
        loading: action.payload.loading,
        error: action.payload.error,
        product: action.payload.product,
      }
    case PRODUCT_QUANTITY_SELECT:
      return {
        ...initialState.productDetails,
        selectedQuantity: action.payload.selectedQuantity,
        availableQuantity: action.payload.availableQuantity,
        selectedSize: action.payload.selectedSize,
        loading: action.payload.loading,
        error: action.payload.error,
        product: action.payload.product,
      }
    case PRODUCT_DETAILS_FAIL:
      return {
        ...initialState.productDetails,
        loading: false,
        error: true,
        product: {},
      }
    default:
      return state
  }
}
