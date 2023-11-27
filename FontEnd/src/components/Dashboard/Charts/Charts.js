import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export default function Charts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/category").then((res) => {
      console.log(res.data);
    });
  });

  return (
    <div className="pie-chart">
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx={200}
          cy={200}
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data01}
          dataKey="value"
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
}
