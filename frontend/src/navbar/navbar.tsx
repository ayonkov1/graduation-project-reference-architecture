import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bagSelector } from '../redux/helper-functions'
import NavbarLink from './navbar-link'
import './navbar.css'

const Navbar = () => {
  const bag = useSelector(bagSelector)
  const { productsInBag } = bag

  return (
    <div className='navbar'>
      <div className='navbar-top'>
        <div>
          <p>FREE RETURNS & EXCHANGE&nbsp;&nbsp;&nbsp;</p>
          <img
            src='/downward-arrow.png'
            alt='arrow'
            className='arrow'
          />
        </div>
        <div className='navbar-modal'>
          <img
            src='/close-icon.png'
            alt='close-button'
            className='close-icon'
          />
          <h4>FREE RETURNS & EXCHANGE</h4>
          <p>Exchange or Return item(s) within 60 days for free</p>
          <p>Customised products cannot be returned</p>
          <p>
            Please note some products with limited availability can be returned
            for 14 days
          </p>
        </div>
      </div>
      <div className='navbar-bottom'>
        <div className='navbar-logo'>
          <NavbarLink
            destination='/'
            text='Logo'
          />
        </div>
        <div className='navbar-links'>
          <NavbarLink
            destination='/'
            text='Home'
          />
          <NavbarLink
            destination='/products'
            text='Products'
          />
          <NavbarLink
            destination='/checkout'
            text='Checkout'
          />
        </div>
        <div className='cart-navbar'>
          <Link to='/checkout'>
            <img
              src='/cart-logo.png'
              alt='shopping-bag'
            />
          </Link>
          <div className='products-in-cart'>{productsInBag.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
