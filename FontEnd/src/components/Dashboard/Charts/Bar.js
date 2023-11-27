// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";

// import axios from "axios";

// export const data1 = [];

// export default function BarChartssss() {
//   const [data, setData] = useState([]);

//   const arr = [];

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("http://localhost:8080/category").then((res) => {
//       setData(res.data);

//       console.log(res.data);

//       res.data.filter((items) => {
//         if (items.category == "mobile") {
//           data1.push({
//             name: items.prodName,
//             price: items.price,
//             quantity: items.quantity,
//           });
//         }
//         if (items.category == "tv") {
//           data1.push({
//             name: items.prodName,
//             price: items.price,
//             quantity: items.quantity,
//           });
//         }
//         if (items.category == "watch") {
//           data1.push({
//             name: items.prodName,
//             price: items.price,
//             quantity: items.quantity,
//           });
//         }
//         if (items.category == "laptop") {
//           data1.push({
//             name: items.prodName,
//             price: items.price,
//             quantity: items.quantity,
//           });
//         }
//       });
//     });
//   }, []);

//   console.log(data1);

//   return (
//     <>
//       {loading ? (
//         " "
//       ) : (
//         <BarChart
//           width={500}
//           height={300}
//           data={data1}
//           margin={{
//             top: 20,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" stackId="a" fill="#8884d8" />
//           <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
//         </BarChart>
//       )}
//     </>
//   );
// }

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Barss() {
  const data = [
    {
      name: "Mobile",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Televison",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Watch",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Laptop",
      uv: 2780,
      pv: 3908,
    },
  ];

  return (
    <div>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
