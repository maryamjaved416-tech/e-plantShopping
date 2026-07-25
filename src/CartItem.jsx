import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalCost = (item) => {
    const price = parseFloat(item.cost.replace('$', ''));
    return (price * item.quantity).toFixed(2);
  };

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.cost.replace('$', ''));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.name}>
          <h3>{item.name}</h3>
          <p>Price: {item.cost}</p>
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(item)}>+</button>
          </div>
          <p>Subtotal: ${calculateTotalCost(item)}</p>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${calculateTotalAmount()}</h3>
    </div>
  );
}

export default CartItem;
