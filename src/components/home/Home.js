import React from "react";
import logo from "../../img/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg";

const Home = () => {
  return (
    <div className="card mb-3 p-0 m-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={logo} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">Quiz</h4>
            <p className="card-text">
              A quiz is a form of game or mind sport in which players attempt to
              answer questions correctly about a certain or variety of subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
