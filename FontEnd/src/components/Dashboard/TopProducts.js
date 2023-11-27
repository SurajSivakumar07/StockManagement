import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TopProducts() {
  const [data, setData] = useState([]);
  const data1 = [];

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((res) => {
      setData(res.data);

      res.data.filter((items) => {
        if (items.category == "mobile") {
          data1.push({
            name: items.prodName,
            price: items.price,
            quantity: items.quantity,
          });
        }
        if (items.category == "tv") {
          data1.push({
            name: items.prodName,
            price: items.price,
            quantity: items.quantity,
          });
        }
        if (items.category == "watch") {
          data1.push({
            name: items.prodName,
            price: items.price,
            quantity: items.quantity,
          });
        }
        if (items.category == "laptop") {
          data1.push({
            name: items.prodName,
            price: items.price,
            quantity: items.quantity,
          });
        }
      });
    });
    console.log(data1);
  }, []);

  return (
    <>
      <div className="top-product-wrap">
        {data && console.log(data)}
        {data1.map((items) => (
          <p>{items.name}</p>
        ))}

        <h1>hello</h1>
      </div>
    </>
  );
}
