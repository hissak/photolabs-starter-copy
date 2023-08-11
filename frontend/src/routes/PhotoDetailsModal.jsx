import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { photo, setModal, likedState, likePic } = props;
  const similarPhotos = Object.values(photo.similarPhotos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={() => setModal(null)}/>
      </button>
      <div className="photo-details-modal__images">
        <img className='photo-details-modal--image' src={photo.urls.regular} alt="Photo"/>
        <h1>Similar Photos:</h1>
        <PhotoList photos={similarPhotos} likedState={likedState} likePic={likePic}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
