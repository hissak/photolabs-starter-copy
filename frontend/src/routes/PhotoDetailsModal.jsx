import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photo, likedState, likePic, closeModal, handleModal } = props;
  console.log('PHOTOS IN MODAL:', photo);
  const similarPhotos = Object.values(photo.similar_photos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal}/>
      </button>
      <div className="photo-details-modal__images">
        <div>
          <img className='photo-details-modal--image' src={photo.urls.regular} alt="Photo"/>
          <PhotoFavButton photo={photo} likedState={likedState} likePic={likePic} />
        </div>
        <h1>Similar Photos:</h1>
        {console.log('likedState in Modal:', likedState)}
        <PhotoList photos={similarPhotos} likedState={likedState} likePic={likePic} handleModal={handleModal}/>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
