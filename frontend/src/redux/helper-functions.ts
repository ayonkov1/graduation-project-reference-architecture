import { useDispatch } from 'react-redux'
import store from '.'
import { initialStateType } from '../types/state-types'

export const useMyDispatch = () => {
  type AppDispatch = typeof store.dispatch

  return useDispatch<AppDispatch>()
}

export const fetchData = (url: string) => {
  return fetch(url)
    .then((response) => {
      if (response.status / 100 !== 2) {
        throw new Error('err')
      }
      return response.json()
    })
    .then((data) => data)
}

export const productDetailsSelector = (state: initialStateType) => {
  return state.productDetails
}

export const productListSelector = (state: initialStateType) => {
  return state.productList
}

export const bagSelector = (state: initialStateType) => {
  return state.bag
}
