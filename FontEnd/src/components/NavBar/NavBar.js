import React, { useContext, useState } from "react";
import "./navbar.css";
import Sidebar from "../Sidebar/Sidebar";
import DashBoard from "../Dashboard/DashBoard";
import { UserContext } from "../Context/Context";

import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import Notification from "../Notification/Notification";

export default function NavBar() {
  const [trigger, setTrigger] = useState(false);
  const [notification, setNotification] = useState(true);
  const triggerButton = () => {
    if (trigger) setTrigger(false);
    else setTrigger(true);
  };

  const arr = window.location.href.split("/");

  console.log(arr[arr.length - 1]);
  const [search, setSearch] = useContext(UserContext);

  const [pop, setPop] = useState(false);
  return (
    <>
      <div className="nav-wrap">
        {/* Wrapping the left side */}
        <div className="nav-content-left">
          <div className="logo-name">
            <Link to="/dashboard">
              <h3>Inventory Management</h3>
            </Link>

            {/* <i class="fa-solid fa-bars" onClick={triggerButton}></i> */}
          </div>
        </div>
        {/* wrapping centre */}
        <div className="input-filed">
          <i class="fa-solid fa-i"></i>
          <i class="fa-solid fa-m"></i>
        </div>
        {/* Wrapping the right side  */}

        <div className="nav-content-right">
          <div className="profile-logo">
            <i
              class="fa-regular fa-bell"
              onClick={() => {
                setNotification(false);
              }}
            ></i>
            <Notification trigger={notification} />
          </div>
          <div className="profile-logo">
            <i
              class="fa-regular fa-user"
              onClick={() => {
                setPop(true);
              }}
            ></i>

            <Profile trigger={pop} setTrigger={setPop} />
          </div>
        </div>
        {/* End of the wrap  */}
      </div>

      <Sidebar trigger={trigger} />
    </>
  );
}
