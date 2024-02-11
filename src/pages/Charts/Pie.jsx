// PieChartComponent.jsx
import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Completed", value: 5 },
    { name: "Incomplete", value: 7 },
    { name: "Overdue", value: 3 },
    { name: "Total", value: 15 },
  ];

  // Define gradient stops for the blur effect
  const gradientStops = [
    { offset: "0%", stopColor: "rgba(0, 0, 0, 0)" },
    { offset: "100%", stopColor: "rgba(0, 0, 0, 0.8)" },
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} cx={200} cy={200} outerRadius={150} fill="#8884d8" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
      {/* Define the linear gradient */}
      <defs>
        {data.map((entry, index) => (
          <linearGradient
            key={`gradient-${index}`}
            id={`gradient-${index}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            {gradientStops.map((stop, stopIndex) => (
              <stop
                key={`stop-${index}-${stopIndex}`}
                offset={stop.offset}
                stopColor={stop.stopColor}
              />
            ))}
          </linearGradient>
        ))}
      </defs>
    </PieChart>
  );
};

export default PieChartComponent;
