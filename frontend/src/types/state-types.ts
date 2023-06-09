import { plpProduct } from './product-types'

export type bagStateType = {
  productsInBag: {
    availableQuantity: number
    productId: string
    imageUrl: string
    title: string
    price: number
    size: string
    quantity: number
  }[]
}

export type pdpStateType = {
  loading: boolean
  error: boolean
  product: {
    productId: string
    price: number
    color: string
    title: string
    text: string
    subtitle: string
    subTitle: string
    availability_status: string
    images: {
      src: string
    }[]
    variation_list: {
      size: string
      availability_status: string
      availability: number
    }[]
  }
  selectedSize: string
  availableQuantity: number
  selectedQuantity: number
}

export type plpStateType = {
  loading: boolean
  error: boolean
  pages: number
  products: plpProduct[]
}

export type initialStateType = {
  bag: bagStateType
  productDetails: pdpStateType
  productList: plpStateType
}
