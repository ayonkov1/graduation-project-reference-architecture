import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/product-card'
import { listProducts } from '../../redux/actions/product-actions'
import {
  productListSelector,
  useMyDispatch,
} from '../../redux/helper-functions'
import { plpProduct } from '../../types/product-types'
import './product-listing-page.css'

const ProductListingPage = () => {
  const productList = useSelector(productListSelector)
  const { loading, error, products, pages } = productList

  const queryParams = new URLSearchParams(window.location.search)
  let currPage = queryParams.get('page') || 1

  const pageOptions = useMemo(() => {
    return Array.from({ length: pages }, (_, i) => i + 1)
  }, [pages])

  const dispatch = useMyDispatch()

  useEffect(() => {
    dispatch(listProducts(currPage))
  }, [dispatch, currPage])

  const changePage = (page: string) => {
    currPage = page
    let newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      `?page=${currPage}`
    window.history.pushState({ path: newurl }, '', newurl)
    dispatch(listProducts(currPage))
  }

  return (
    <div className='plp'>
      <div className='title'>
        <span>New Arrivals</span>
      </div>
      <div className='products'>
        {loading ? (
          <div>Loading products...</div>
        ) : error ? (
          <div>Error with fetching products</div>
        ) : (
          products.map((p: plpProduct) => (
            <ProductCard
              key={p.productId}
              displayName={p.displayName}
              subTitle={p.subTitle}
              imageURL={p.imageUrl}
              price={p.price}
              id={p.productId}
            />
          ))
        )}
      </div>
      <div className='page-changer'>
        <span>Page</span>
        <select
          value={currPage}
          onChange={(e) => changePage(e.target.value)}>
          {pageOptions.map((pageOption) => (
            <option
              key={pageOption}
              value={pageOption}>
              {pageOption}
            </option>
          ))}
        </select>
        <span>of {pages}</span>
      </div>
    </div>
  )
}

export default ProductListingPage
