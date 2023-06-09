import { Link } from 'react-router-dom'

type ProductCardProps = {
  id: string
  displayName: string
  subTitle: string
  imageURL: string
  price: string
}

const ProductCard = ({
  id,
  displayName,
  subTitle,
  imageURL,
  price,
}: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`}>
      <div className='card'>
        <img
          src={imageURL}
          alt='product'
        />
        <div className='price'>
          <span>£{price}</span>
        </div>
        <span className='name'>{displayName}</span>
        <span className='subTitle'>{subTitle}</span>
      </div>
    </Link>
  )
}

export default ProductCard
