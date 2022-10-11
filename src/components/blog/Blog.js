import React from "react";

const Blog = () => {
  return (
    <div className="m-3 text-center">
      <div className="shadow-lg rounded my-5 p-3">
        <h2>React router</h2>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div className="shadow-lg rounded my-5 p-3">
        <h2>Context api</h2>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="shadow-lg rounded my-5 p-3">
        <h2>useRef Hook</h2>
        <p>
          The useRef is a hook that allows to directly create a reference to the
          DOM element in the functional component. The useRef returns a mutable
          ref object. This object has a property called .current. The value is
          persisted in the refContainer.current property. These values are
          accessed from the current property of the returned object. The
          .current property could be initialized to the passed argument
          initialValue e.g. useRef(initialValue). The object can persist a value
          for a full lifetime of the component.
        </p>
      </div>
    </div>
  );
};

export default Blog;
