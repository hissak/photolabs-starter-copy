import React from "react";
import FavIcon from "./FavIcon";
import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";



const PhotoListItem = (props) => {
  const { sampleData, likedState, likePic, handleModal } = props;
  return (
    <div className="photo-list__item">
      <div className="photo-list-item__image-container">
        <div className="photo-list__image">
          <img src={sampleData.urls.regular} alt="Photo" onClick={() => {
            handleModal(sampleData.id);
          }}/>
          <PhotoFavButton likedState={likedState} likePic={likePic} id={Number(sampleData.id)}/>
        </div>
        <div className="photo-list__user-profile">
          <div className="photo-list-item__image-container__profile__profile-image">
            <img src={sampleData.user.profile} alt="Profile" />
          </div>
          <div className="photo-list__user-details">
            <div className="photo-list__user-info">
              <h1>{sampleData.user.name}</h1>
            </div>
            <div className="photo-list__user-location">
              <h2>{sampleData.location.city}, {sampleData.location.country}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
