import React, { useContext, useEffect, useState } from "react";
import { prodData } from "./ProductData";

import "./product.css";
import Edit from "../Edit/Edit";

import axios from "axios";

export default function Products() {
  const [active, setActive] = useState(false);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/category")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);
  return (
    <>
      <div className="welcome-messeage">
        <h2>Product/Items</h2>
      </div>
      <div className="searchBar">
        <input
          type="text"
          inputmode="numeric"
          pattern="[0-9\s]{13,19}"
          autocomplete="cc-number"
          maxlength="19"
          placeholder="Search here"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(search);
          }}
        />

        {loading ? (
          <div className="spinner"></div>
        ) : (
          <div className="product-wrap">
            {data
              .filter((items) => {
                if (search == " ") return items;
                else if (
                  items.prodName.toLowerCase().includes(search.toLowerCase()) ||
                  items.category.toLowerCase().includes(search.toLowerCase())
                ) {
                  return items;
                }
              })
              .map((items) => (
                <div className="prod-contnet">
                  <img src={items.image} />
                  <div className="title-content">
                    <p>Item Id:{items.id}</p>
                    <p>Item Name:{items.prodName}</p>
                    <p>Price:{items.price}</p>
                    <p>Product Quantity:{items.quantity}</p>
                  </div>
                  <div className="reduceOrPlus"></div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
