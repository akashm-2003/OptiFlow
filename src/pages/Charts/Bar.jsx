// BarGraph.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarGraph = () => {
  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 278 },
    { name: "May", value: 189 },
    { name: "Jun", value: 239 },
    { name: "Jul", value: 349 },
  ];

  // Define gradient stops for the blur effect
  const gradientStops = [
    { offset: "0%", stopColor: "rgba(0, 0, 0, 0)" },
    { offset: "100%", stopColor: "rgba(0, 0, 0, 0.8)" },
  ];

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <defs>
        <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
          {gradientStops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.stopColor} />
          ))}
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="url(#bar-gradient)" />
    </BarChart>
  );
};

export default BarGraph;
