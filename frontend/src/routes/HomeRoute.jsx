import React, {useState} from 'react';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import photos from "mocks/photos";

const HomeRoute = (props) => {
  const { handleModal, likePic, likedState } = props;
  return (
    <div className="home-route">
      <TopNavigationBar likedState={likedState}/>
      <PhotoList likedState={likedState} likePic={likePic} handleModal={handleModal} photos={photos}/>
    </div>
  );
};

export default HomeRoute;
