import { Link } from 'react-router-dom'

type NavbarLinkProps = {
  destination: string
  text: string
}

const NavbarLink = ({ destination, text }: NavbarLinkProps) => {
  return (
    <div className='link'>
      <Link to={destination}>{text}</Link>
    </div>
  )
}

export default NavbarLink
