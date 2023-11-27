import { DataArray } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Category() {
  const [data, setData] = useState([]);
  const [mobile, setMobile] = useState(0);
  const [tv, setTv] = useState(0);
  const [watch, setWatch] = useState(0);

  const filterFunction = async () => {
    for (let i = 0; i < data.length; i++) {
      //   if (data[i].code === "1") {
      //     setMobile(parseInt(mobile + data[i].quantity));
      //   } else if (data[i].code === "2") {
      //     setTv(tv + data[i].quantity);
      //   } else if (data[i].code === "3") {
      //     setWatch(watch + data[i].quantity);
      //   }
      setWatch(watch + data[i].quantity);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((res) => {
      setData(res.data);
      console.log(res.data);

      res.data.filter((items) => {
        if (items.code == "1") {
          console.log("Qunatity:", items.quantity);
        }
      });

      res.data.filter((items) => {
        if (items.code == "1") {
          console.log(items.category);
        }
      });
    });

    filterFunction();

    setLoading(false);
  }, []);

  return (
    <>
      {<div className="searchBar">{loading ? "loading " : mobile}</div>}

      {
        <div>
          watch
          <h1 className="searchBar"> {watch} </h1>
        </div>
      }
    </>
  );
}
