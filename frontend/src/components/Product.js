import React from 'react'

const Product = (props) => {
  const { product } = props;
  return (
    <div key={product.slug} className='product'>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className='product-info'>
        <Link to={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </Link>
        <p><strong>${product.price}</strong></p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default Product