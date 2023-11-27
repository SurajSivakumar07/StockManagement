import React, { useEffect, useState } from "react";
import "./notification.css";
import axios from "axios";
export default function Notification(props) {
  const [activate, setActivate] = useState(false);

  let arr = [];

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].quantity <= 1) {
          console.log(res.data[i].prodName);
          setActivate(true);
          arr.push({ item: res.data[i].prodName });
        }
      }
    });
  }, []);

  const display = () => {
    arr.map((items) => <p>{items}</p>);
  };

  return props.trigger ? (
    " "
  ) : (
    <>
      <div className="notification-wrap">
        {activate ? display() : "no items are out of stock"}
      </div>

      {arr.map((items) => (
        <p>{items}</p>
      ))}
      {display()}
    </>
  );
}
