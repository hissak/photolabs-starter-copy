import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [likedState, setLikedState] = useState(false);
  const likePic = () => {
    if (likedState === false) {
      setLikedState(true);
      console.log('LIKE STATE =>', likedState);
    } else if (likedState === true) {
      setLikedState(false);
    }
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={likePic}>
        <FavIcon likedState={likedState}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;