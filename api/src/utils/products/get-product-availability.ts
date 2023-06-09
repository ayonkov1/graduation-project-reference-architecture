import config from '../../config/config'
const { get } = require('../../http-client/http-client')

const getProductAvailability = (id: string, info: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = config.baseUrl + `7afd300a-c668-4488-a808-a3d02c37f525`

      const response = await get(url)
      const data = JSON.parse(response.body)

      const var_list: {
        size: string
        availability_status: string
        availability: string
      }[] = []
      data.variation_list.map((variation: any) =>
        var_list.push({
          size: variation.size,
          availability_status: variation.availability_status,
          availability: variation.availability,
        })
      )

      resolve({
        ...info,
        productId: id,
        availability_status: data.availability_status,
        variation_list: var_list,
      })
    } catch (error) {
      reject(error)
    }
  })
}

export default getProductAvailability
