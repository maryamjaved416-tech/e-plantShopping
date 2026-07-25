import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { name: 'Snake Plant', cost: '$15', image: 'https://cdn.pixabay.com/photo/2018/07/11/07/32/plant-3529979_1280.jpg' },
      { name: 'Spider Plant', cost: '$12', image: 'https://cdn.pixabay.com/photo/2017/03/14/13/03/spider-plant-2142372_1280.jpg' },
      { name: 'Peace Lily', cost: '$18', image: 'https://cdn.pixabay.com/photo/2017/03/26/16/34/peace-lily-2176907_1280.jpg' },
      { name: 'Boston Fern', cost: '$14', image: 'https://cdn.pixabay.com/photo/2017/09/24/18/56/fern-2782395_1280.jpg' },
      { name: 'Aloe Vera', cost: '$10', image: 'https://cdn.pixabay.com/photo/2017/06/16/15/38/aloe-vera-2409453_1280.jpg' },
      { name: 'Areca Palm', cost: '$22', image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/palm-1846311_1280.jpg' },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      { name: 'Lavender', cost: '$16', image: 'https://cdn.pixabay.com/photo/2016/07/21/06/25/lavender-1531577_1280.jpg' },
      { name: 'Jasmine', cost: '$18', image: 'https://cdn.pixabay.com/photo/2017/05/07/08/56/jasmine-2292173_1280.jpg' },
      { name: 'Rosemary', cost: '$12', image: 'https://cdn.pixabay.com/photo/2016/08/05/13/49/rosemary-1572864_1280.jpg' },
      { name: 'Mint', cost: '$8', image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/mint-1238264_1280.jpg' },
      { name: 'Lemon Balm', cost: '$10', image: 'https://cdn.pixabay.com/photo/2017/07/06/09/40/lemon-balm-2477651_1280.jpg' },
      { name: 'Sweet Basil', cost: '$9', image: 'https://cdn.pixabay.com/photo/2016/07/19/09/54/basil-1527065_1280.jpg' },
    ],
  },
  {
    category: 'Succulents',
    plants: [
      { name: 'Echeveria', cost: '$11', image: 'https://cdn.pixabay.com/photo/2018/03/25/13/34/succulent-3260395_1280.jpg' },
      { name: 'Haworthia', cost: '$9', image: 'https://cdn.pixabay.com/photo/2019/07/28/17/00/plants-4370892_1280.jpg' },
      { name: 'Jade Plant', cost: '$13', image: 'https://cdn.pixabay.com/photo/2017/03/27/13/37/jade-plant-2179547_1280.jpg' },
      { name: 'Cactus', cost: '$10', image: 'https://cdn.pixabay.com/photo/2016/11/29/09/32/cactus-1867717_1280.jpg' },
      { name: 'Zebra Plant', cost: '$12', image: 'https://cdn.pixabay.com/photo/2019/07/28/17/00/plants-4370893_1280.jpg' },
      { name: 'Sedum', cost: '$8', image: 'https://cdn.pixabay.com/photo/2018/06/07/13/55/succulent-3459548_1280.jpg' },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const isItemInCart = (name) => {
    return cartItems.some((item) => item.name === name);
  };

  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-list-container">
      <div className="cart-nav">
        <h2>Paradise Nursery</h2>
        <span className="cart-quantity">Cart Items: {totalCartQuantity}</span>
      </div>

      {plantCategories.map((cat) => (
        <div className="category-section" key={cat.category}>
          <h3>{cat.category}</h3>
          <div className="product-grid">
            {cat.plants.map((plant) => (
              <div className="product-card" key={plant.name}>
                <img src={plant.image} alt={plant.name} className="product-thumbnail" />
                <h4>{plant.name}</h4>
                <p>{plant.cost}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isItemInCart(plant.name) || addedItems[plant.name]}
                >
                  {isItemInCart(plant.name) || addedItems[plant.name]
                    ? 'Added to Cart'
                    : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
