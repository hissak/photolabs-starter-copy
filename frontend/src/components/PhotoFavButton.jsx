import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const { likedState, likePic, photo } = props;

  //This component is used to render the like button on the homepage and in the modal.

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={() => likePic(photo)}>
        <FavIcon likedState={likedState[photo.id]}/>
      </div>
    </div>
  );
};

export default PhotoFavButton;