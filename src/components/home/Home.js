import React from "react";
import logo from "../../img/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg";

const Home = () => {
  return (
    <div class="card mb-3 p-0 m-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src={logo} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">Quiz</h4>
            <p class="card-text">
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
