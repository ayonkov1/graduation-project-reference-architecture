import { Reducer } from 'redux'
import { initialState } from '..'
import { initialStateType } from '../../types/state-types'
import {
  ADD_TO_BAG,
  INCREASE_QUANTITY,
  ORDER,
  REMOVE_ITEM_FROM_CART,
  SELECT_PRODUCT_QUANTITY_IN_CART,
} from '../action-types/bag-action-types'

export const bagReducer: Reducer<initialStateType['bag'], any> = (
  state = initialState.bag,
  action: any
) => {
  let productsInBag
  let productToUpdate
  switch (action.type) {
    case INCREASE_QUANTITY:
      productsInBag = [...state.productsInBag]
      productToUpdate = productsInBag.find(
        (p) => p.productId === action.payload.productId
      )
      if (productToUpdate) {
        productToUpdate.quantity += Number(action.payload.quantity)
      }
      alert('Product added to bag successfully!')
      localStorage.setItem('bagItems', JSON.stringify([...state.productsInBag]))
      return { productsInBag: [...state.productsInBag] }
    case ADD_TO_BAG:
      const product = {
        productId: action.payload.product.productId,
        imageUrl: action.payload.product.images[0].src,
        title: action.payload.product.title,
        price: action.payload.product.price,
        size: action.payload.selectedSize,
        quantity: Number(action.payload.selectedQuantity),
        availableQuantity: action.payload.availableQuantity,
      }

      alert('Product added to bag successfully!')
      localStorage.setItem(
        'bagItems',
        JSON.stringify([...state.productsInBag, product])
      )

      return { productsInBag: [...state.productsInBag, product] }
    case SELECT_PRODUCT_QUANTITY_IN_CART:
      productsInBag = [...state.productsInBag]
      productToUpdate = productsInBag.find(
        (p) =>
          p.productId === action.payload.productId &&
          p.size === action.payload.size
      )
      if (productToUpdate) {
        productToUpdate.quantity = Number(action.payload.quantity)
      }

      localStorage.setItem('bagItems', JSON.stringify([...state.productsInBag]))
      return { productsInBag: [...state.productsInBag] }
    case REMOVE_ITEM_FROM_CART:
      productsInBag = [...state.productsInBag]
      const newProductsInBag = productsInBag.filter(
        (p) =>
          p.productId !== action.payload.productId ||
          p.size !== action.payload.size
      )
      localStorage.setItem('bagItems', JSON.stringify([...newProductsInBag]))
      return { productsInBag: [...newProductsInBag] }
    case ORDER:
      localStorage.setItem('bagItems', JSON.stringify([]))
      return { productsInBag: [] }
    default:
      return state
  }
}
