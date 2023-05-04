import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const CheckoutSteps = (props) => {
  return (
    <Row className='checkout-steps'>
      <Col className={props.step1 ? 'active' : ''} ></Col>
    </Row>
  )
}

export default CheckoutSteps