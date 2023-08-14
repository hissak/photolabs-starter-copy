import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavIcon from './FavIcon';

//likedState set to true so that heart icon appears red to match mockup on Compass.

const TopNavigation = (props) => {
  const { likedState, topicData, setTopic } = props;

  //displayAlert is a boolean that determines if the alert marker on like symbol in nav bar is displayed or not.
  const displayAlert = Object.keys(likedState).length > 0 ? true : false;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => setTopic(null)}>PhotoLabs</span>
      <TopicList topicData={topicData} setTopic={setTopic} />
      <FavIcon displayAlert={displayAlert} likedState={true}/>
    </div>
  );
};

export default TopNavigation;
