// TreeMapGraph.jsx
import React from "react";
import { Treemap, Tooltip, Rectangle } from "recharts";

const TreeMapGraph = () => {
  const data = [
    { name: "Project A", value: 400 },
    { name: "Project B", value: 300 },
    { name: "Project C", value: 200 },
    { name: "Project D", value: 278 },
    { name: "Project E", value: 189 },
    { name: "Project F", value: 239 },
    { name: "Project G", value: 349 },
  ];

  return (
    <Treemap
      width={500}
      height={300}
      data={data}
      dataKey="value"
      ratio={4 / 3}
      stroke="#000000"
      fill="#AEAEAE"
    >
      <Tooltip />
      <Rectangle />
    </Treemap>
  );
};

export default TreeMapGraph;
