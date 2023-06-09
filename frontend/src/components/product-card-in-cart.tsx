import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  removeItemFromCart,
  selectProductQuantityInCart,
} from '../redux/actions/bag-actions'
import { useMyDispatch } from '../redux/helper-functions'

type ProductCardInCartProps = {
  productId: string
  title: string
  size: string
  imageURL: string
  price: number
  quantity: number
  availableQuantity: number
}

const ProductCardInCart = ({
  productId,
  title,
  size,
  imageURL,
  price,
  quantity,
  availableQuantity,
}: ProductCardInCartProps) => {
  const quantityOptions = useMemo(() => {
    return Array.from({ length: availableQuantity }, (_, i) => i + 1)
  }, [availableQuantity])

  const dispatch = useMyDispatch()

  const selectQuantity = (selector: any) => {
    dispatch(
      selectProductQuantityInCart(
        selector.dataset.productid,
        selector.dataset.size,
        selector.value
      )
    )
  }

  const removeItem = (target: any) => {
    dispatch(removeItemFromCart(target.dataset.productid, target.dataset.size))
  }

  return (
    <div className='product-card-in-cart'>
      <Link to={`/products/${productId}`}>
        <img
          src={imageURL}
          className='image-in-cart'
          alt='product'
        />
      </Link>
      <div className='checkout-product-info'>
        <div className='product-info-top'>
          <div className='checkout-product-info-left'>
            <Link to={`/products/${productId}`}>
              <span className='product-in-cart-title'>
                {title.toUpperCase()}
              </span>
            </Link>
            <div className='product-in-cart-size'>Size: {size}</div>
          </div>
          <div className='product-in-cart-price'>
            £{(price * quantity).toFixed(2)}
          </div>
        </div>
        <div className='product-info-bottom'>
          <select
            className='cart-product-quantity-selector'
            data-productid={productId}
            data-size={size}
            value={quantity}
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
          <div
            className='remove-item'
            data-productid={productId}
            data-size={size}
            onClick={(e) => removeItem(e.target)}>
            Remove item
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCardInCart
