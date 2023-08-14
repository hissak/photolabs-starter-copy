import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, likedState, likePic, closeModal, handleModal } = props;
  const similarPhotos = Object.values(photo.similar_photos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
      </button>
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image-container">
          <img className='photo-details-modal__image' src={photo.urls.full} alt="Photo"/>
          <div className="photo-details-modal__photographer-details">
            <img className='photo-details-modal__profile' src={photo.user.profile} />
            <div className="photo-details-modal__user">
              <p className="photo-details-modal__photographer-name">{photo.user.name}</p>
              <p className='photo-details-modal__photographer-location'>{photo.location.city}, {photo.location.country}</p>
            </div>
          </div>
          <PhotoFavButton photo={photo} likedState={likedState} likePic={likePic} />
        </div>
        <h1>Similar Photos:</h1>
        <PhotoList photos={similarPhotos} likedState={likedState} likePic={likePic} handleModal={handleModal}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
