import React from "react";
import "./profile.css";
import { useNavigate } from "react-router";
export default function Profile(props) {
  const navigation = useNavigate();
  return props.trigger ? (
    <>
      <div className="profile-wrap">
        <h2
          onClick={() => {
            localStorage.clear();
            props.setTrigger(false);
            navigation("/");
            window.location.reload();
          }}
        >
          Logout
        </h2>
        <h2
          onClick={() => {
            props.setTrigger(false);
          }}
        >
          Cancel
        </h2>
      </div>
    </>
  ) : (
    " "
  );
}
