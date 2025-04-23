import { useState } from 'react';
import iconShoppingBag from '../../../assets/icons/icon-shopping-bag.svg';

const ShoppingBagIcon = () => {
  const [cartCount, setCartCount] = useState(12);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    // інша логіка onClick
    <div className="icon-wrapper" onClick={handleAddToCart}>
      <img src={iconShoppingBag} alt="Favorite Icon" className="icon-image" />

      {cartCount > 0 && <div className="icon-badge">{cartCount}</div>}
    </div>
  );
};

export default ShoppingBagIcon;
