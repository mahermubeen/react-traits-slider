import React from "react";
import "./NAVLINK.css";

function NAVLINK(props) {
  const { children, className } = props;

  return (
    <div className={`nav-link smart-layers-pointers ${className || ""}`}>
      <a href="#home">
        <div className="link smart-layers-pointers sfprodisplay-bold-white-18px">{children}</div>
      </a>
    </div>
  );
}

export default NAVLINK;
