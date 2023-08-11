import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = (props) => {
  const { likedState, likePic, handleModal } = props;
  const newPhotoArray = photos.map((photo) => {
    return (
      <PhotoListItem sampleData={photo} key={photo.id} likedState={likedState} likePic={likePic} handleModal={handleModal}/>
    );
  });
  return (
    <ul className="photo-list">
      {newPhotoArray}
    </ul>
  );
};

export default PhotoList;
