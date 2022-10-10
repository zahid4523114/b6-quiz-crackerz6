import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="d-flex flex-lg-row flex-column justify-content-between align-items-center m-3 p-3 rounded shadow-lg">
      <div>
        <h1>Quiz ace</h1>
      </div>
      <div className=" d-flex flex-lg-row flex-column">
        <Link className="text-decoration-none fs-4 me-lg-4" to="/home">
          Home
        </Link>
        <Link className="text-decoration-none fs-4 me-lg-4" to="/topics">
          Topics
        </Link>
        <Link className="text-decoration-none fs-4 me-lg-4" to="/statistics">
          Statistics
        </Link>
        <Link className="text-decoration-none fs-4 me-lg-4" to="/blog">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Header;
