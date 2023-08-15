import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import React from 'react';

const HomeRoute = (props) => {
  const { handleModal, likePic, likedState, photoData, topicData, setTopic, currenTopic, setFavouritesView } = props;
  return (
    <div className="home-route">
      <TopNavigationBar likedState={likedState} topicData={topicData} setTopic={setTopic} currenTopic={currenTopic} setFavouritesView={setFavouritesView}/>
      <PhotoList likedState={likedState} likePic={likePic} handleModal={handleModal} photos={photoData}/>
    </div>
  );
};

export default HomeRoute;
