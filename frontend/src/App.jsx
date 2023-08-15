import React from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'assets/hooks/useApplicationData';


const App = () => {
  const { state, likePic, handleModal, closeModal, setTopic, setFavouritesView } = useApplicationData();
  //modal is a boolean that determines if the modal is open or not.
  console.log(state, 'STATE IN APP');
  return (
    <div className="App">
      <HomeRoute
        handleModal={handleModal}
        likePic={likePic}
        likedState={state.likedState}
        photoData={state.photoData}
        topicData={state.topicData}
        setTopic={setTopic}
        setFavouritesView={setFavouritesView} />
      {state.modal && <PhotoDetailsModal photo={state.modal} likedState={state.likedState} likePic={likePic} closeModal={closeModal} handleModal={handleModal}/>}
    </div>
  );
};

export default App;