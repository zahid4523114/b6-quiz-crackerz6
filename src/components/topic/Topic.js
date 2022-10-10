import React from "react";
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name } = topic;
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/topic/${id}`);
  };
  // console.log(topic);
  return (
    <div className="card bg-dark my-4" style={{ width: "18rem" }}>
      <img src={logo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="text-white">{name}</h4>
        <button
          onClick={() => handleNavigate(id)}
          className="btn btn-primary d-block container-fluid"
        >
          Explore <i class="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Topic;
