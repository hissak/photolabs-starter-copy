import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'assets/hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state } = useApplicationData();
  console.log ('state in App:', state)

  return (
    <div className="App">
      <HomeRoute handleModal={state.handleModal} likePic={state.likePic} likedState={state.likedState}/>
      {state.modal}
    </div>
  );
};

export default App;