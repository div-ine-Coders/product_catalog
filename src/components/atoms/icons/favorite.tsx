import { useState } from 'react';
import iconFavorite from '../../../assets/icons/icon-favorite-heart.svg';

const FavouriteIcon = () => {
  const [favoriteCount, setFavoriteCount] = useState(0);

  const handleAddToFavorite = () => {
    setFavoriteCount(prev => prev + 1);
  };

  return (
    // інша логіка onClick
    <div className="icon-wrapper" onClick={handleAddToFavorite}>
      <img src={iconFavorite} alt="Cart Icon" className="icon-image" />

      {favoriteCount > 0 && <div className="icon-badge">{favoriteCount}</div>}
    </div>
  );
};

export default FavouriteIcon;
