import React from "react";
import "./LOGO.css";

function LOGO(props) {
  const { vector2, vector4, vector5, vector6, vector8 } = props;

  return (
    <div className="logo">
      <div className="flex-col gracitamorales-regular-normal-white-16-9px">
        <div className="text-7">.</div>
        <div className="text-2">+</div>
      </div>
      <div className="flex-col-1">
        <div className="flex-row-1">
          <div className="text-12 gracitamorales-regular-normal-white-7-7px">.</div>
          <div className="text-5 gracitamorales-regular-normal-white-8-1px">+</div>
        </div>
        <img
          className="vector"
          src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector@2x.png"
        />
        <div className="overlap-group-1">
          <img className="vector-1" src={vector2} />
          <div className="text-11 gracitamorales-regular-normal-white-7-7px">.</div>
        </div>
      </div>
      <div className="overlap-group5">
        <div className="overlap-group8">
          <div className="overlap-group7">
            <div className="overlap-group2">
              <img
                className="vector-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-2@2x.png"
              />
              <img className="vector-3" src={vector4} />
              <img className="vector-4" src={vector5} />
            </div>
            <div className="text-1 gracitamorales-regular-normal-white-16-9px">+</div>
          </div>
          <img className="vector-5" src={vector6} />
          <div className="overlap-group6">
            <div className="overlap-group1">
              <img
                className="vector-6"
                src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-9@2x.png"
              />
              <div className="text-9 gracitamorales-regular-normal-white-16-9px">.</div>
            </div>
            <div className="overlap-group4">
              <div className="text-4 gracitamorales-regular-normal-white-12-1px">+</div>
              <div className="text-10 gracitamorales-regular-normal-white-7-7px">.</div>
            </div>
          </div>
        </div>
        <div className="flex-row-2">
          <div className="flex-col-2">
            <img className="vector-7" src={vector8} />
            <div className="text-6 gracitamorales-regular-normal-white-8-1px">+</div>
          </div>
          <div className="flex-col-3">
            <div className="overlap-group3">
              <img
                className="vector-8"
                src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-6@2x.png"
              />
              <img
                className="vector-9"
                src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-7@2x.png"
              />
            </div>
            <div className="text-3 gracitamorales-regular-normal-white-16-9px">+</div>
          </div>
        </div>
        <div className="text-8 gracitamorales-regular-normal-white-16-9px">.</div>
      </div>
    </div>
  );
}

export default LOGO;
