import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
  { name: 'Aloe Vera', cost: '$15', image: '' },
  { name: 'Snake Plant', cost: '$20', image: '' },
  { name: 'Peace Lily', cost: '$18', image: '' },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <h3>{product.name}</h3>
            <p>{product.cost}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
