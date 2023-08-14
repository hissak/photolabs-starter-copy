import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { handleModal, likePic, likedState, photoData } = props;
  return (
    <div className="home-route">
      <TopNavigationBar likedState={likedState}/>
      <PhotoList likedState={likedState} likePic={likePic} handleModal={handleModal} photos={photoData}/>
    </div>
  );
};

export default HomeRoute;
