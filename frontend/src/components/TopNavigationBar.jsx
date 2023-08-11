import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

//likedState set to true so that heart icon appears red to match mockup on Compass.

const TopNavigation = (props) => {
  const { likedState } = props;
  const displayAlert = Object.keys(likedState).length > 0 ? true : false;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavIcon displayAlert={displayAlert} likedState={true}/>
    </div>
  );
};

export default TopNavigation;
