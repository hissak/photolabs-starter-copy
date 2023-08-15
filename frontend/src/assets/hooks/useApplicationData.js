import React, { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  SET_MODAL: "SET_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_LIKED_STATE: "SET_LIKED_STATE",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_CURRENT_TOPIC: "SET_CURRENT_TOPIC",
  SET_FAVOURITES_VIEW: "SET_FAVOURITES_VIEW",
};


const {
  SET_MODAL,
  CLOSE_MODAL,
  SET_LIKED_STATE,
  SET_PHOTO_DATA,
  SET_TOPIC_DATA,
  SET_CURRENT_TOPIC,
  SET_FAVOURITES_VIEW} = ACTIONS;

//Reducer is used to update the state of the application based on the action type.

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
      console.log(action.value.id, 'ACTION VALUE ID');
      const likedState = { ...state.likedState };
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
  case SET_FAVOURITES_VIEW:
    return {...state, viewFavourites: action.value};

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
    viewFavourites: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("http://localhost:8001/api/topics")
      .then((res) => dispatch({ type: SET_TOPIC_DATA, value: res.data }))
      .catch((error) => console.log(error));
  }, []);

  //useEffect below is used to fetch the photos from the database and set the state of the application.
  //The photos fetched depend on whether or not a topic has been selected.

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

  useEffect(() => {
    if (state.viewFavourites) {
      console.log(state.viewFavourites, 'STATE VIEW FAVOURITES');
      axios.get("http://localhost:8001/api/photos")
        .then((res) => {
          const likedPhotos = [];
          res.data.map((photo) => {
            if (Object.keys(state.likedState).includes(photo.id.toString())) {
              likedPhotos.push(photo);
            }
          });
          console.log(likedPhotos, 'LIKED PHOTOS FUNCTION');
          console.log(res.data, 'RES DATA');
          dispatch({ type: SET_PHOTO_DATA, value: likedPhotos });
        });
    }
  }, [state.viewFavourites]);
  
  
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

  const setFavouritesView = (value) => {
    dispatch({ type: SET_FAVOURITES_VIEW, value: value });
  };

  return {state, likePic, handleModal, closeModal, setTopic, setFavouritesView};
};


export default useApplicationData;