import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(null);
  const handleModal = (id) => {
    if (modal) {
      setModal(null);
    } else {
      setModal(<PhotoDetailsModal photoId={id} setModal={setModal}/>);
    }
  };
  return (
    <div className="App">
      <HomeRoute handleModal={handleModal}/>
      {modal}
    </div>
  );
};

export default App;