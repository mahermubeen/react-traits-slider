import React, { useState, useEffect } from "react";
import StateClosedSelectionSkin from "../StateClosedSelectionSkin";
import "./carousal.css";

const Item = ({ level, attrs, imgSrc, key }) => {
  //Constants
  const className = "item level" + level;

  return (
    <div className={className}>
      <img src={imgSrc} />
    </div>
  );
};

export default Item;
