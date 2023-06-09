export type ProductFromShopAPI = {
  productId: string
  displayName: string
  subTitle: string
  image: {
    src: string
  }
}

export type Product = {
  productId: string
  displayName: string
  subTitle: string
  imageUrl: string
}
