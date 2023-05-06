import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PaymentMethodScreen = () => {
  const submitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div>
       <CheckoutSteps step1 step2 step3></CheckoutSteps>

       <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className='my-3'>Payment Method</h1>

        <Form onSubmit={submitHandler}>
          <div className="mb-3">
            <Form.Check
              type='radio'
              id='Paypal'
              label='Paypal'
              value='Paypal'
              checked={paymentMethodName === 'Paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Form.Check
              type='radio'
              id='Stripe'
              label='Stripe'
              value='Stripe'
              checked={paymentMethodName === 'Stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <Button type='submit'>Continue</Button>
          </div>
        </Form>
       </div>
    </div>
  )
}

export default PaymentMethodScreen