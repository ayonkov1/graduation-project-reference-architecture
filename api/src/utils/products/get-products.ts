import config from '../../config/config'
import { ProductFromShopAPI, Product } from '../../types/product'
const { get } = require('../../http-client/http-client')

const getProducts = (category: string, page: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      let start = 0

      if (page) {
        start = Number(page) * 48 - 48
      }

      const url = config.baseUrl + `454f15e8-06d3-4193-86e3-ba21d377f04d`

      const response = await get(url)
      const data = JSON.parse(response.body)

      if (data.raw.itemList.count === 0) {
        reject({ response: { status: 400 } })
      }

      let productsInfo: Array<Product> = []
      const products: Array<ProductFromShopAPI> = data.raw.itemList.items
      productsInfo = products.map((p) => ({
        productId: p.productId,
        displayName: p.displayName,
        subTitle: p.subTitle,
        imageUrl: p.image.src,
      }))

      resolve({ count: data.raw.itemList.count, products: productsInfo })
    } catch (error) {
      reject(error)
    }
  })
}

export default getProducts
