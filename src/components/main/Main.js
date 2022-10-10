import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../header/Header";

export const TopicContext = createContext();

const Main = () => {
  const topicsData = useLoaderData();
  const data = topicsData.data;
  //   console.log(data);
  return (
    <TopicContext.Provider value={data}>
      <Header></Header>
      <Outlet></Outlet>
    </TopicContext.Provider>
  );
};

export default Main;
