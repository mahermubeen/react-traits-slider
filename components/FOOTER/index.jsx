import React from "react";
import "./FOOTER.css";

function FOOTER(props) {
  const { vector4, vector5, vector7, vector8 } = props;

  return (
    <div className="footer animate-enter12" show-on-scroll>
      <div className="frame-35">
        <div className="logo-1">
          <div className="flex-col-4 gracitamorales-regular-normal-white-16-9px">
            <div className="text-29">.</div>
            <div className="text-24">+</div>
          </div>
          <div className="flex-col-5">
            <div className="flex-row-3">
              <div className="text-34 gracitamorales-regular-normal-white-7-7px">.</div>
              <div className="text-27 gracitamorales-regular-normal-white-8-1px">+</div>
            </div>
            <img
              className="vector-10"
              src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-10@2x.png"
            />
            <div className="overlap-group4-1">
              <img
                className="vector-11"
                src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-11@2x.png"
              />
              <div className="text-33 gracitamorales-regular-normal-white-7-7px">.</div>
            </div>
          </div>
          <div className="overlap-group5-1">
            <div className="overlap-group8-1">
              <div className="overlap-group7-1">
                <div className="overlap-group1-1">
                  <img
                    className="vector-12"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-13@2x.png"
                  />
                  <img className="vector-13" src={vector4} />
                  <img className="vector-14" src={vector5} />
                </div>
                <div className="text-23 gracitamorales-regular-normal-white-16-9px">+</div>
              </div>
              <img
                className="vector-15"
                src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-22@2x.png"
              />
              <div className="overlap-group6-1">
                <div className="overlap-group-2">
                  <img className="vector-16" src={vector7} />
                  <div className="text-31 gracitamorales-regular-normal-white-16-9px">.</div>
                </div>
                <div className="overlap-group2-1">
                  <div className="text-26 gracitamorales-regular-normal-white-12-1px">+</div>
                  <div className="text-32 gracitamorales-regular-normal-white-7-7px">.</div>
                </div>
              </div>
            </div>
            <div className="flex-row-4">
              <div className="flex-col-6">
                <img className="vector-17" src={vector8} />
                <div className="text-28 gracitamorales-regular-normal-white-8-1px">+</div>
              </div>
              <div className="flex-col-7">
                <div className="overlap-group3-1">
                  <img
                    className="vector-18"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-20@2x.png"
                  />
                  <img
                    className="vector-19"
                    src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/vector-21@2x.png"
                  />
                </div>
                <div className="text-25 gracitamorales-regular-normal-white-16-9px">+</div>
              </div>
            </div>
            <div className="text-30 gracitamorales-regular-normal-white-16-9px">.</div>
          </div>
        </div>
        <div className="frame-33">
          <div className="built-on sfprodisplay-bold-white-18px">Built on</div>
          <div className="frame-34">
            <div className="solana sfprodisplay-bold-white-18px">#Solana</div>
            <img
              className="solana-july2021-1"
              src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613692f49f9ade27ed4c8bb3/img/solana-july-2021-1@2x.png"
            />
          </div>
        </div>
        <div className="copyright sfprodisplay-bold-white-18px">© Copyright 2021 Nasty Nerds</div>
      </div>
      <img
        className="socials-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/socials-1@2x.png"
      />
    </div>
  );
}

export default FOOTER;
