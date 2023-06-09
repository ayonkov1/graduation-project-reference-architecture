import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { OrderForm } from '../../components/order-form'
import { ProductsInCart } from '../../components/products-in-cart'
import { bagSelector } from '../../redux/helper-functions'
import './checkout.css'

const Checkout = () => {
  const bag = useSelector(bagSelector)
  const { productsInBag } = bag

  const haveProducts = productsInBag.length > 0

  return (
    <div className='cart'>
      {!haveProducts ? (
        <div className='checkout-no-products'>
          <div className='checkout-message'>No products in bag</div>
          <Link to='/products'>
            <div className='go-shopping'>Go Shopping</div>
          </Link>
        </div>
      ) : (
        <>
          <div className='cart-products'>
            <ProductsInCart />
          </div>
          <div className='cart-right'>
            <h2>Order Information</h2>
            <OrderForm />
          </div>
        </>
      )}
    </div>
  )
}

export default Checkout
