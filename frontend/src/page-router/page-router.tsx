import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home-page/home-page'
import ProductListingPage from '../pages/product-listing-page/product-listing-page'
import ProductDetailsPage from '../pages/product-details-page/product-details-page'
import Checkout from '../pages/checkout/checkout'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import NotFoundPage from '../pages/not-found-page/not-found-page'

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/products'
          element={<ProductListingPage />}
        />
        <Route
          path='/products/:id'
          element={<ProductDetailsPage />}
        />
        <Route
          path='/checkout'
          element={<Checkout />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default PageRouter
