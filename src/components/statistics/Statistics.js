import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import "./Statistics.css";

const Statistics = () => {
  const data = useLoaderData();
  const rechartData = data.data;
  console.log(rechartData.data);
  return (
    <div className="rechart-container">
      <LineChart
        className="rechart"
        width={800}
        height={500}
        data={rechartData}
      >
        <Line type="monotone" dataKey="total" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
