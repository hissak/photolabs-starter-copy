import React, { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  SET_MODAL: "SET_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_LIKED_STATE: "SET_LIKED_STATE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_CURRENT_TOPIC: "SET_CURRENT_TOPIC",
};


const {SET_MODAL,
  CLOSE_MODAL,
  SET_LIKED_STATE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  SET_CURRENT_TOPIC} = ACTIONS;



const reducer = (state, action) => {
  switch (action.type) {

  case SET_MODAL:
    if (state.modal) {
      return { ...state, modal: null };
    } else if (!state.modal) {
      return { ...state, modal: action.value };
    }
    break;

  case CLOSE_MODAL:
    return { ...state, modal: null };

  case SET_LIKED_STATE:
    if (!state.likedState[action.value.id]) {
      const likedState = { ...state.likedState };
      likedState[action.value.id] = true;
      return {...state, likedState};
    }
    if (state.likedState[action.value.id]) {
      const likedState = { ...state.likePic };
      delete likedState[action.value.id];
      return {...state, likedState};
    }
    break;

  case SET_PHOTO_DATA:
    return {...state, photoData: action.value};

  case SET_TOPIC_DATA:
    return {...state, topicData: action.value};

  case SET_CURRENT_TOPIC:
    return {...state, currentTopic: action.value};
    
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};


const useApplicationData = () => {

  const initialState = {
    modal: null,
    likedState: {},
    photoData: [],
    topicData: [],
    currentTopic: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:8001/api/topics")
      .then((res) => dispatch({ type: SET_TOPIC_DATA, value: res.data }))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (state.currentTopic) {
      axios.get(`http://localhost:8001/api/topics/photos/${state.currentTopic}`)
        .then((res) => dispatch({ type: SET_PHOTO_DATA, value: res.data }))
        .catch((error) => console.log(error));
    } else {
      axios.get("http://localhost:8001/api/photos")
        .then((res) => dispatch({ type: SET_PHOTO_DATA, value: res.data }))
        .catch((error) => console.log(error));
    }
  }, [state.currentTopic]);

  const likePic = (photo) => {
    dispatch({ type: SET_LIKED_STATE, value: photo });
  };
  const handleModal = (photo) => {
    dispatch({ type: SET_MODAL, value: photo });
  };
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  const setTopic = (topic) => {
    dispatch({ type: SET_CURRENT_TOPIC, value: topic });
  };

  return {state, likePic, handleModal, closeModal, setTopic};
};


export default useApplicationData;