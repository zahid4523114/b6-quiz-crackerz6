import React from "react";

const Topic = ({ topic }) => {
  const { logo, name } = topic;
  console.log(topic);
  return (
    <div class="card bg-dark my-4" style={{ width: "18rem" }}>
      <img src={logo} class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 className="text-white">{name}</h4>
        <button className="btn btn-primary d-block container-fluid">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Topic;
