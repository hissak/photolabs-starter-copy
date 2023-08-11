import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";
import topics from "mocks/topics";


const topicArray = topics.map((topic) => {
  console.log(topic);
  return <TopicListItem key={topic.id} title={topic.title} />;
});

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topicArray}
    </div>
  );
};

export default TopicList;
