import React from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { Helmet } from 'react-helmet-async'

const PaymentMethodScreen = () => {
  return (
    <div>
       <CheckoutSteps step1 step2 step3></CheckoutSteps>

       <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className='my-3'>Payment Method</h1>
       </div>
    </div>
  )
}

export default PaymentMethodScreen