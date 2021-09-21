import React from "react";
import "./NAVLINK2.css";

function NAVLINK2(props) {
  const { children } = props;

  return (
    <div className="nav-link-2">
      <a href="#traits">
        <div className="home-i21426 smart-layers-pointers sfprodisplay-bold-white-18px">{children}</div>
      </a>
    </div>
  );
}

export default NAVLINK2;
