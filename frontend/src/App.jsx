import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import './App.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(null);
  const handleModal = (photo) => {
    if (modal) {
      setModal(null);
    } else {
      console.log('PHOTO', photo);
      setModal(<PhotoDetailsModal photo={photo} setModal={setModal} likedState={likedState} likePic={likePic}/>);
    }
  };

  const [likedState, setLikedState] = useState({});
  const likePic = (id) => {
    if (!likedState[id]) {
      setLikedState(prevState => {
        const newState = {...prevState};
        newState[id] = true;
        return newState;
      });
    } else if (likedState[id]) {
      setLikedState(
        prevState => {
          const newState = {...prevState};
          delete newState[id];
          return newState;
        }
      );
    }
  };

  return (
    <div className="App">
      <HomeRoute handleModal={handleModal} likePic={likePic} likedState={likedState}/>
      {modal}
    </div>
  );
};

export default App;