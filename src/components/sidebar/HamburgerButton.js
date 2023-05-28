import React from "react";
import "./Sidebar.css";

export default function HamburgerButton(props) {
  return (
    <div className="hamburger-btn" onClick={props.click}>
      &#9776;
    </div>
  );
}
