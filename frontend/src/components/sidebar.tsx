import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { addProductToBag } from '../redux/actions/bag-actions'
import { selectProductQuantity } from '../redux/actions/product-actions'
import {
  productDetailsSelector,
  useMyDispatch,
} from '../redux/helper-functions'
import SizeSelector from './size-selector'

type SidebarProps = {
  subTitle: string
  displayName: string
  color: string
  price: number
  availability_status: string
  variation_list: {
    size: string
    availability_status: string
    availability: number
  }[]
}

const Sidebar = ({
  subTitle,
  displayName,
  color,
  price,
  availability_status,
  variation_list,
}: SidebarProps) => {
  const productDetails = useSelector(productDetailsSelector)
  const { selectedSize, selectedQuantity, availableQuantity } = productDetails

  const quantityOptions = useMemo(() => {
    return Array.from({ length: availableQuantity }, (_, i) => i + 1)
  }, [availableQuantity])

  const dispatch = useMyDispatch()

  const selectQuantity = (selector: any) => {
    dispatch(selectProductQuantity(selector.value))
  }

  const addToBag = () => {
    if (!selectedSize || !selectedQuantity) {
      alert('Please select size and quantity before adding to bag.')
    } else {
      dispatch(addProductToBag())
    }
  }

  return (
    <>
      <span className='subTitle'>{subTitle}</span>
      <span className='displayName'>{displayName}</span>
      <span className='color'>{color}</span>
      <span className='price'>£{price}</span>
      {availability_status === 'IN_STOCK' ? (
        <>
          <div className='sizes'>
            <span>Sizes</span>
            <div className='selectors'>
              {variation_list.map((variation) => (
                <SizeSelector
                  key={variation.size}
                  size={variation.size}
                  availability={variation.availability_status}
                  availableQuantity={variation.availability}
                />
              ))}
            </div>
            {!selectedSize ? (
              <div className='quantity-selector'>Please select size</div>
            ) : (
              <select
                className='quantity-selector'
                value={selectedQuantity}
                onChange={(e) => selectQuantity(e.target)}>
                {
                  <>
                    <option value={0}>Select number of products</option>
                    {quantityOptions.map((q) => (
                      <option
                        key={q}
                        value={q}>
                        {q}
                      </option>
                    ))}
                  </>
                }
              </select>
            )}
          </div>
          <div className='add-to-cart'>
            <div
              className='add-to-cart-btn'
              onClick={() => addToBag()}>
              ADD TO BAG
            </div>
          </div>
        </>
      ) : (
        <span className='not-available'>Product not available</span>
      )}
    </>
  )
}

export default Sidebar
