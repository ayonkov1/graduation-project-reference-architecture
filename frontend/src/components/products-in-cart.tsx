import { useSelector } from 'react-redux'
import { bagSelector } from '../redux/helper-functions'
import ProductCardInCart from './product-card-in-cart'

export const ProductsInCart = () => {
  const bag = useSelector(bagSelector)
  const { productsInBag } = bag

  const totalPrice = productsInBag.reduce((a, c) => a + c.price * c.quantity, 0)
  const totalItems = productsInBag.reduce((a, c) => a + c.quantity, 0)

  return (
    <>
      <h2 className='cart-title'>YOUR BAG</h2>
      <span className='cart-total'>
        Total ({totalItems} items) : <b>${totalPrice}</b>
      </span>
      {productsInBag.map((p) => {
        return (
          <ProductCardInCart
            key={p.productId + p.size}
            productId={p.productId}
            title={p.title}
            size={p.size}
            imageURL={p.imageUrl}
            price={p.price}
            quantity={p.quantity}
            availableQuantity={p.availableQuantity}
          />
        )
      })}
    </>
  )
}
