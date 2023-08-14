import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = (props) => {
  const { topicData, setTopic } = props;
  const topicArray = topicData.map((topic) => {
    return <TopicListItem key={topic.id} topic={topic} setTopic={setTopic}/>;
  });
  return (
    <div className="top-nav-bar__topic-list">
      {topicArray}
    </div>
  );
};

export default TopicList;
