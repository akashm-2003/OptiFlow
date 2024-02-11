// ComposedResponsiveContainer.jsx
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComposedResponsiveContainer = () => {
  const data = [
    { name: "Jan", bar: 400, line: 240 },
    { name: "Feb", bar: 300, line: 139 },
    { name: "Mar", bar: 200, line: 980 },
    { name: "Apr", bar: 278, line: 390 },
    { name: "May", bar: 189, line: 480 },
    { name: "Jun", bar: 239, line: 380 },
    { name: "Jul", bar: 349, line: 430 },
  ];

  // Define gradient stops for the blur effect
  const gradientStops = [
    { offset: "0%", stopColor: "rgba(0, 0, 0, 0)" },
    { offset: "100%", stopColor: "rgba(0, 0, 0, 0.8)" },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <defs>
          <linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
            {gradientStops.map((stop, index) => (
              <stop
                key={index}
                offset={stop.offset}
                stopColor={stop.stopColor}
              />
            ))}
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="bar" barSize={20} fill="url(#bar-gradient)" />
        <Line type="monotone" dataKey="line" stroke="#000000" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedResponsiveContainer;
