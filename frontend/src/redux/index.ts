import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { initialStateType } from '../types/state-types'
import { bagReducer } from './reducers/bag-reducers'
import {
  productDetailsReducer,
  productListReducer,
} from './reducers/product-reducers'

export const initialState: initialStateType = {
  bag: {
    productsInBag: localStorage.getItem('bagItems')
      ? JSON.parse(localStorage.getItem('bagItems') || '{}')
      : [],
  },
  productDetails: {
    loading: false,
    error: false,
    product: {
      productId: '',
      price: 0,
      color: '',
      title: '',
      text: '',
      subtitle: '',
      subTitle: '',
      availability_status: '',
      images: [],
      variation_list: [],
    },
    selectedSize: '',
    availableQuantity: 0,
    selectedQuantity: 0,
  },
  productList: {
    loading: false,
    error: false,
    pages: 0,
    products: [],
  },
}

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  bag: bagReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
