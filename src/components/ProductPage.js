// src/components/ProductPage.js
import React from 'react';
import { usePageCart } from '../context/cartPageContext';

const ProductPage = () => {
  const { addToCart } = usePageCart();
  const product = { id: 1, name: 'Sample Product', price: 19.99 };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
