import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const [likedState, setLikedState] = useState({});
  const {handleModal} = props;

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
    <div className="home-route">
      <TopNavigationBar likedState={likedState}/>
      <PhotoList likedState={likedState} likePic={likePic} handleModal={handleModal}/>
    </div>
  );
};

export default HomeRoute;
