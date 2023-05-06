import React, { useContext, useEffect, useState } from 'react';
import CheckoutSteps from '../components/CheckoutSteps';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Store } from '../store';
import { useNavigate } from 'react-router-dom';

const PaymentMethodScreen = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);

  // from state get cart, from cart get shippingAddress and paymentMethod
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod ] = useState(
    paymentMethod || 'PayPal'
  );

  // if shippingAddress does not exist, navigate user to previous step
  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping')
    }    
  }, [shippingAddress, navigate])

  const submitHandler = (e) => {
    e.preventDefault();

    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
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
              id='PayPal'
              label='PayPal'
              value='PayPal'
              checked={paymentMethodName === 'PayPal'}
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