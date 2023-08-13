import React, { useState, useEffect } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const useApplicationData = () => {

  const [modal, setModal] = useState(null);
  const [likedState, setLikedState] = useState({});

  const handleModal = (photo) => {
    if (modal) {
      setModal(null);
    } else {
      console.log('PHOTO', photo);
      setModal(<PhotoDetailsModal photo={photo} setModal={setModal} likedState={likedState} likePic={likePic} />);
    }
  };
    
  const likePic = (id) => {
    if (!likedState[id]) {
      console.log('LIKED!', id);
      setLikedState(prevState => {
        const newState = {...prevState};
        newState[id] = true;
        return newState;
      });
    } else if (likedState[id]) {
      console.log('UNLIKED!', id);
      setLikedState(
        prevState => {
          const newState = {...prevState};
          delete newState[id];
          return newState;
        }
      );
    }
  };

  const onClosePhotoDetailsModal = () => setModal(null);
  const state = { modal, handleModal, onClosePhotoDetailsModal, likedState, likePic };
  console.log('STATE', state);
  return {state};
};

export default useApplicationData;