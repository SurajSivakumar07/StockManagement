import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import "./customer.css";
import Edit from "../Edit/Edit";

function SmallExample() {
  const [rows, setRow] = React.useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/customer")
      .then((res) => {
        setRow(res.data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  console.log(rows);

  const [search, setSearch] = useState("");

  const deleteProd = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/customer/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("Error deleting item");
        console.error(err);
      });
  };
  return (
    <div className="customer-wrap">
      <h3>Customers Table</h3>
      <input
        type="text"
        placeholder="Enter the name"
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Status</th>
            <th>Last Order</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {rows
            .filter((items) => {
              if (search == "") {
                return items;
              } else if (
                items.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return items;
              }
            })
            .map((items) => (
              <tr>
                <th>{items.id}</th>
                <th>{items.name}</th>
                <th>{items.email}</th>
                <th>{items.phone}</th>
                <th>{items.location}</th>

                <th>{items.status}</th>
                <th>{items.status}</th>

                <th>
                  <i
                    class="fa-solid fa-pen-to-square"
                    onClick={() => setActive(true)}
                  ></i>
                </th>

                <th>
                  <i class="fa-solid fa-trash" onClick={deleteProd}></i>
                </th>
              </tr>
            ))}
        </table>
      )}
      <Edit trigger={active} Trigger={setActive} />
    </div>
  );
}

export default SmallExample;
