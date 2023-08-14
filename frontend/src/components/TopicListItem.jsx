import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { topic, setTopic } = props;

  //This component is used to render individual topics on the home page.

  return (
    <div className='topic-list__item'>
      <span onClick={() => setTopic(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
