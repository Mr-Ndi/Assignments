import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  
  // You would typically fetch product details based on the ID
  // This is just a mock example
  const product = {
    id: id,
    name: `Product ${id}`,
    price: 99.99,
    description: 'This is a sample product description.'
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <div className="product-info">
        <p>Product ID: {product.id}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails; 