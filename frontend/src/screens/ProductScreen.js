import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, product: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;

  const [{loading, error, product}, dispatch] = useReducer(reducer, {
    product: [],
    loading: true, 
    error: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);        
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {        
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, [slug])

  return (
    loading ? (
      <div>Loading...</div>
    ) : error ? ( 
      <div>{error}</div>
    ) : ( 
      <Row>
        <Col md={6}>
          <img 
            className='img-large'
            src={product.image} 
            alt={product.name} 
          />
        </Col>

        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              >
              </Rating>              
            </ListGroup.Item>
            
            <ListGroup.Item>
              Price : ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: 
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        
        <Col md={3}></Col>
      </Row>
    )
  )
}

export default ProductScreen