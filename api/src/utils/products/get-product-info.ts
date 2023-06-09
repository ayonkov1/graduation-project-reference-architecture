import config from '../../config/config'
const { get } = require('../../http-client/http-client')

const getProductInfo = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = config.baseUrl + `0407c98e-58b5-4867-a09f-b955552c6ab1`

      const response = await get(url)
      const data = JSON.parse(response.body)

      const images: { src: any }[] = []
      data.view_list.map((vl: any) => images.push({ src: vl.image_url }))

      resolve({
        productId: data.productId,
        price: data.pricing_information.currentPrice,
        color: data.attribute_list.color,
        images: images,
        title: data.product_description.title,
        text: data.product_description.text,
        subtitle: data.product_description.subtitle,
        subTitle: data.attribute_list.brand,
      })
    } catch (error) {
      reject(error)
    }
  })
}

export default getProductInfo
