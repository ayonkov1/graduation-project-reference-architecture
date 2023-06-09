import { useState } from 'react'
import { order } from '../redux/actions/bag-actions'
import { useMyDispatch } from '../redux/helper-functions'

type formErrorsType = {
  fullName: boolean
  address: boolean
  townCity: boolean
  postCode: boolean
  email: boolean
  paymentMethod: boolean
}

export const OrderForm = () => {
  const initialState = {
    fullName: '',
    address: '',
    additionalInfo: '',
    townCity: '',
    postCode: '',
    email: '',
    phoneNumber: '',
    cashOnDelivery: false,
  }
  const [formValues, setFormValues] = useState(initialState)
  const [formErrors, setFormErrors] = useState<formErrorsType>({
    fullName: false,
    address: false,
    townCity: false,
    postCode: false,
    email: false,
    paymentMethod: false,
  })

  const dispatch = useMyDispatch()

  const handleChange = (e: any) => {
    const { name, value } = e.target
    if (name === 'cashOnDelivery') {
      return setFormValues({
        ...formValues,
        cashOnDelivery: !formValues.cashOnDelivery,
      })
    }
    setFormValues({ ...formValues, [name]: value })
  }

  const submitOrder = (e: any) => {
    e.preventDefault()
    if (validate(formValues) && formValues.cashOnDelivery) {
      if (window.confirm('Do you want to confirm the order?')) {
        dispatch(order())
        alert('Order is confirmed!')
      }
    }
  }

  const validate = (values: any) => {
    const errors: formErrorsType = {
      fullName: false,
      address: false,
      postCode: false,
      townCity: false,
      email: false,
      paymentMethod: false,
    }
    const regex = /(.+)@(.+){2,}\.(.+){2,}/
    if (!values.fullName) {
      errors.fullName = true
    }
    if (!values.address) {
      errors.address = true
    }
    if (!values.postCode) {
      errors.postCode = true
    }
    if (!values.townCity) {
      errors.townCity = true
    }
    if (!values.email || !regex.test(values.email)) {
      errors.email = true
    }
    if (!values.cashOnDelivery) {
      errors.paymentMethod = true
    }
    setFormErrors(errors)
    if (Object.values(errors).find((v) => v === true)) {
      return false
    }
    return true
  }

  return (
    <form className='order-form'>
      <h4>Delivery Address</h4>
      <input
        className={formErrors.fullName ? 'error' : ''}
        type='text'
        placeholder='Full Name *'
        name='fullName'
        value={formValues.fullName}
        onChange={handleChange}
      />
      <input
        className={formErrors.address ? 'error' : ''}
        type='text'
        placeholder='Address *'
        name='address'
        value={formValues.address}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Additional info'
        name='additionalInfo'
        value={formValues.additionalInfo}
        onChange={handleChange}
      />
      <input
        className={formErrors.townCity ? 'error' : ''}
        type='text'
        placeholder='Town/City *'
        name='townCity'
        value={formValues.townCity}
        onChange={handleChange}
      />
      <input
        className={formErrors.postCode ? 'error' : ''}
        type='text'
        placeholder='Post Code *'
        name='postCode'
        value={formValues.postCode}
        onChange={handleChange}
      />
      <h4>Contact Details</h4>
      <input
        className={formErrors.email ? 'error' : ''}
        type='text'
        placeholder='Email *'
        name='email'
        value={formValues.email}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Phone Number (optional)'
        name='phoneNumber'
        value={formValues.phoneNumber}
        onChange={handleChange}
      />
      <h4>Payment Method</h4>
      <span className={formErrors.paymentMethod ? 'error' : 'hidden'}>
        Select a payment method
      </span>
      <div className='checkbox'>
        <input
          type='checkbox'
          id='cashOnDelivery'
          name='cashOnDelivery'
          checked={formValues.cashOnDelivery}
          onChange={handleChange}
        />
        <label htmlFor='cashOnDelivery'>Cash on Delivery</label>
      </div>
      <button
        className='order-btn'
        onClick={(e) => submitOrder(e)}>
        Submit Order
      </button>
    </form>
  )
}
