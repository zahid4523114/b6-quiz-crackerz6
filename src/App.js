import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Main from "./components/main/Main";
import Quizes from "./components/quizes/Quizes";
import Statistics from "./components/statistics/Statistics";
import Topics from "./components/topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/topic/:topicId",
          loader: ({ params }) =>
            fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
            ),
          element: <Quizes></Quizes>,
        },
      ],
    },
    {
      path: "*",
      element: (
        <div className="text-center mt-5">
          <i class="fa-solid fa-triangle-exclamation text-danger fs-1"></i>
          <h1>404 couldn't found the page!</h1>
        </div>
      ),
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
