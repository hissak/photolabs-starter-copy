import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = () => {
  const [likedState, setLikedState] = useState({});

  const likePic = (id) => {
    if (!likedState[id]) {
      setLikedState(prevState => ({
        ...prevState,
        [id]: true
      }));
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
    <div className="home-route">
      <TopNavigationBar likedState={likedState}/>
      <PhotoList likedState={likedState} likePic={likePic} />
    </div>
  );
};

export default HomeRoute;
