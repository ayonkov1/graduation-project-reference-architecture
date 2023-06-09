import store from '..'
import {
  ADD_TO_BAG,
  INCREASE_QUANTITY,
  ORDER,
  REMOVE_ITEM_FROM_CART,
  SELECT_PRODUCT_QUANTITY_IN_CART,
} from '../action-types/bag-action-types'

export const addProductToBag = () => async (dispatch: any) => {
  const { product, selectedSize, selectedQuantity, availableQuantity } =
    store.getState().productDetails

  if (
    store
      .getState()
      .bag.productsInBag.find(
        (x: any) => x.productId === product.productId && x.size === selectedSize
      )
  ) {
    return dispatch({
      type: INCREASE_QUANTITY,
      payload: { productId: product.productId, quantity: selectedQuantity },
    })
  }

  dispatch({
    type: ADD_TO_BAG,
    payload: { product, selectedSize, selectedQuantity, availableQuantity },
  })
}

export const selectProductQuantityInCart =
  (productId: string, size: string, quantity: number) =>
  async (dispatch: any) => {
    dispatch({
      type: SELECT_PRODUCT_QUANTITY_IN_CART,
      payload: { productId, size, quantity },
    })
  }

export const removeItemFromCart =
  (productId: string, size: string) => async (dispatch: any) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: { productId, size } })
  }

export const order = () => async (dispatch: any) => {
  dispatch({ type: ORDER })
}
