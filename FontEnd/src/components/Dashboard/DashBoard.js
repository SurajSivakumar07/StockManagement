import React, { useCallback, useContext, useState } from "react";
import TopProducts from "./TopProducts";
import "./dashboard.css";

import Bar from "./Charts/Bar";

import { UserContext } from "../Context/Context";
import bg from "../../Assests/donload.jpg";
import Barss from "./Charts/Bar";
export default function DashBoard() {
  const [search, setSearch] = useContext(UserContext);

  return (
    <>
      <div className="welcome-messeage">
        <h2>Home/Dashboard</h2>
      </div>

      <div className="dashboard-wrap">
        <img src={bg} />

        <div className="dashboard-text-wrap">
          <h2>Welcome to Inventory Store </h2>
        </div>

        <div className="charts">
          <Barss />
        </div>
      </div>
    </>
  );
}
