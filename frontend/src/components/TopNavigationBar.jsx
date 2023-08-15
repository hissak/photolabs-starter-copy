import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

//likedState set to true so that heart icon appears red to match mockup on Compass.

const TopNavigation = (props) => {
  const { likedState, topicData, setTopic, setFavouritesView } = props;

  //displayAlert is a boolean that determines if the alert marker on like symbol in nav bar is displayed or not.
  const displayAlert = Object.keys(likedState).length > 0 ? true : false;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => {
        setTopic(null);
        setFavouritesView(null);
      }}>PhotoLabs</span>
      <TopicList topicData={topicData} setTopic={setTopic} setFavouritesView={setFavouritesView} />
      <div onClick={() => setFavouritesView(true)}>
        <FavIcon displayAlert={displayAlert} likedState={true} setFavouritesView={setFavouritesView}/>
      </div>
    </div>
  );
};

export default TopNavigation;
