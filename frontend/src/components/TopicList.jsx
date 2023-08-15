import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = (props) => {
  const { topicData, setTopic, setFavouritesView } = props;

  //This component is used to render the list of topics on the home page.

  const topicArray = topicData.map((topic) => {
    return <TopicListItem key={topic.id} topic={topic} setTopic={setTopic} setFavouritesView={setFavouritesView}/>;
  });
  return (
    <div className="top-nav-bar__topic-list">
      {topicArray}
    </div>
  );
};

export default TopicList;
