import React, { useState, useReducer } from "react";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const reducer = (state, action) => {
  if (action.type === "SET_MODAL") {
    if (state.modal) {
      return { ...state, modal: null };
    } else if (!state.modal) {
      return { ...state, modal: action.value };
    }
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, modal: null };
  } else if (action.type === "SET_LIKED_STATE") {
    if (!state.likedState[action.value.id]) {
      const newState = { ...state };
      newState.likedState[action.value.id] = true;
      console.log('STATE IF LIKED', state.likedState);
      return newState;
    } else if (state.likedState[action.value.id]) {
      const newState = { ...state };
      console.log('WHY AM I RUNNING');
      // delete newState.likedState[action.value.id];
      // console.log("NEWSTATE", newState);
      return newState;
    }
  } else {
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};
const useApplicationData = () => {

  const initialState = {
    modal: null,
    likedState: {}
  };
  const [state, dispatch] = useReducer(reducer, initialState);


  const likePic = (photo) => {
    dispatch({ type: "SET_LIKED_STATE", value: photo });
  };
  const handleModal = (photo) => {
    dispatch({ type: "SET_MODAL", value: photo });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  //   const handleModal = (photo) => {
  //     if (modal) {
  //       setModal(null);
  //     } else {
  //       console.log('PHOTO', photo);
  //       setModal(<PhotoDetailsModal photo={photo} setModal={setModal} likedState={likedState} likePic={likePic} />);
  //     }
  //   };
    
  // const likePic = (id) => {
  //   if (!likedState[id]) {
  //     console.log('LIKED!', id);
  //     setLikedState(prevState => {
  //       const newState = {...prevState};
  //       newState[id] = true;
  //       return newState;
  //     });
  //   } else if (likedState[id]) {
  //     console.log('UNLIKED!', id);
  //     setLikedState(
  //       prevState => {
  //         const newState = {...prevState};
  //         delete newState[id];
  //         return newState;
  //       }
  //     );
  //     }
  //   };

  //   const onClosePhotoDetailsModal = () => setModal(null);
  //   console.log('STATE', state);
  return {state, likePic, handleModal, closeModal};
};





export default useApplicationData;