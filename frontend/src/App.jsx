import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'assets/hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, likePic, handleModal, closeModal } = useApplicationData();
  console.log('state in App:', state);

  return (
    <div className="App">
      <HomeRoute handleModal={handleModal} likePic={likePic} likedState={state.likedState}/>
      {state.modal && <PhotoDetailsModal photo={state.modal} likedState={state.likedState} likePic={likePic} closeModal={closeModal} />}
    </div>
  );
};

export default App;