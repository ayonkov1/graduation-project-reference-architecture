import { Link } from 'react-router-dom'
import './home-page.css'

const HomePage = () => {
  return (
    <div className='home-page'>
      <div className='sale-message'>
        Now an extra 20% off in the Summer Sale. Up to 50% off already.
      </div>
      <div className='img-container'>
        <img
          src='homepage.png'
          alt='landing'
        />
        <div className='shop-now'>
          <Link to='/products'>
            <div className='button'>
              SHOP NOW&nbsp;
              <img
                src='right-arrow.png'
                alt='arrow'
              />
            </div>
          </Link>
        </div>
      </div>
      <div className='text-container'>
        <div>
          <h2>Your One-Stop Destination for Premium Products: [Shop Name]</h2>
          <p>
            Welcome to [Shop Name], where luxury meets convenience! We are
            thrilled to introduce you to an unparalleled online shopping
            experience. Our carefully curated selection of premium products is
            designed to cater to your every need, providing you with top-notch
            quality, style, and functionality. Explore our diverse range of
            categories, ranging from fashion and beauty to home essentials and
            electronics. Our team of expert buyers scours the globe to bring you
            the latest trends and the most sought-after brands. Whether you're
            searching for a statement piece to elevate your wardrobe, a
            high-tech gadget to simplify your daily routine, or a thoughtful
            gift for a loved one, we have you covered.
          </p>
          <p>
            At [Shop Name], we pride ourselves on delivering excellence in every
            aspect of your shopping journey. Our user-friendly interface ensures
            a seamless browsing experience, allowing you to easily navigate
            through our extensive product catalog. With detailed product
            descriptions, high-resolution images, and customer reviews, you can
            make informed decisions before adding items to your cart.
          </p>
        </div>
        <div>
          <h2>Workout clothes, for any sport</h2>
          <p>
            We understand that time is of the essence, which is why we have
            optimized our shipping and delivery process to ensure swift and
            reliable service. From the moment you complete your purchase to the
            moment your package arrives at your doorstep, we prioritize your
            satisfaction and aim for timely, secure deliveries. Your trust and
            satisfaction are our utmost priorities, which is why we offer a
            hassle-free returns policy. If, for any reason, you are not
            completely satisfied with your purchase, our dedicated customer
            support team is here to assist you, ensuring a smooth and efficient
            return process.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
