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
      const likedState = { ...state.likedState };
      console.log('NEWSTATE IF LIKED', likedState);
      likedState[action.value.id] = true;
      console.log('STATE IF LIKED', state.likedState);
      return {...state, likedState};
    }
    if (state.likedState[action.value.id]) {
      const likedState = { ...state.likePic };
      console.log('WHY AM I RUNNING');
      delete likedState[action.value.id];
      return {...state, likedState};
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

  return {state, likePic, handleModal, closeModal};
};





export default useApplicationData;