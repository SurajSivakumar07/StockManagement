import React, { useEffect, useState } from "react";
import axios from "axios";

import "./supplier.css";
import Edit from "../Edit/Edit";

function Supplier() {
  const [rows, setRow] = React.useState([]);

  const [loading, setLoading] = useState(true);

  const [active, setActive] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/supplier")
      .then((res) => {
        setRow(res.data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);

  console.log(rows);

  const [search, setSearch] = useState("");
  return (
    <div className="customer-wrap">
      <h1>Supplier Table</h1>

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
            <th>Code</th>
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
              </tr>
            ))}
          <Edit trigger={active} Trigger={setActive} />
        </table>
      )}
    </div>
  );
}

export default Supplier;
