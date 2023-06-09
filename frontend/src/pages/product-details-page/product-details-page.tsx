import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Description from '../../components/description'
import ImageViewer from '../../components/image-viewer'
import Sidebar from '../../components/sidebar'
import { detailsProduct } from '../../redux/actions/product-actions'
import {
  productDetailsSelector,
  useMyDispatch,
} from '../../redux/helper-functions'
import './product-details-page.css'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const productDetails = useSelector(productDetailsSelector)
  const { loading, error, product } = productDetails

  const {
    images,
    subtitle,
    text,
    title,
    subTitle,
    color,
    price,
    availability_status,
    variation_list,
  } = product

  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(detailsProduct(id))
  }, [dispatch, id])

  let firstImage = { src: '' }
  let otherImages: { src: string }[] = []

  if (images && images.length > 0) {
    firstImage = images[0]
    otherImages = images.slice(1)
  }

  return (
    <div className='pdp'>
      {loading ? (
        <div>Loading product...</div>
      ) : error ? (
        <div>Error with fetching product</div>
      ) : (
        <>
          <div className='left-part'>
            <ImageViewer
              firstImgSrc={firstImage.src}
              otherImages={otherImages}
            />
            <Description
              subtitle={subtitle}
              text={text}
            />
          </div>
          <div className='right-part'>
            <Sidebar
              displayName={title}
              subTitle={subTitle}
              color={color}
              price={price}
              availability_status={availability_status}
              variation_list={variation_list}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetailsPage
