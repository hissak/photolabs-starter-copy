import React from 'react';
import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'assets/hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, likePic, handleModal, closeModal, setTopic } = useApplicationData();
  //modal is a boolean that determines if the modal is open or not.
  return (
    <div className="App">
      <HomeRoute
        handleModal={handleModal}
        likePic={likePic}
        likedState={state.likedState}
        photoData={state.photoData}
        topicData={state.topicData}
        setTopic={setTopic} />
      {state.modal && <PhotoDetailsModal photo={state.modal} likedState={state.likedState} likePic={likePic} closeModal={closeModal} handleModal={handleModal}/>}
    </div>
  );
};

export default App;