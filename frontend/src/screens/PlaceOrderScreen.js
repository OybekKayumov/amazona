import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Store } from '../store';
import CheckoutSteps from '../components/CheckoutSteps';

const PlaceOrderScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>       
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className='my-3'>Preview Order</h1>

      <Row>
        <Col md="my-3">
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Shipping</Card.Title>

              <Card.Text>
                <strong>Name</strong>{cart.shippingAddress.fullName} <br />
                <strong>Address</strong>{cart.shippingAddress.address},
                {cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},
                {cart.shippingAddress.country},
              </Card.Text>

              <Link to="/shipping">Edit</Link>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>Payment</Card.Title>

              <Card.Text>
                <strong>Method:</strong> {cart.paymentMethod}
              </Card.Text>

              <Link to="/payment">Edit</Link>
            </Card.Body>
          </Card>

          <Card className='mb-3'>
            <Card.Body>
              <Card.Title>Items</Card.Title>

              <ListGroup variant='flush'>
                {cart.cartItems.map((item) => (
                  <ListGroup.Item key={item._id}>
                    <Row className='align-items-center'>
                      <Col md={6}>
                        <img 
                          src={item.image} alt={item.name} 
                          className='img-fluid rounded img-thumbnail'
                        ></img>{' '}

                        <Link to={`/product/${item.slug}`}>{item.name}</Link>
                      </Col>
                      <Col md={3}><span>{item.quantity}</span></Col>
                      <Col md={3}>{item.price}</Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Link to="/cart">Edit</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default PlaceOrderScreen