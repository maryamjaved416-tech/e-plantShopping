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
      <div className="cart-actions">
        <button onClick={() => alert('Checkout functionality coming soon!')}>
          Checkout
        </button>
        <button onClick={() => alert('Continue Shopping')}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
