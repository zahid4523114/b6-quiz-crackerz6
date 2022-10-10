import React, { useContext } from "react";
import { TopicContext } from "../main/Main";
import Topic from "../topic/Topic";
import "./Topics.css";

const Topics = () => {
  const topics = useContext(TopicContext);
  // console.log(topics);
  return (
    <div className="topics-container">
      {topics.map((eachTopic) => (
        <Topic topic={eachTopic} key={eachTopic.id}></Topic>
      ))}
    </div>
  );
};

export default Topics;
