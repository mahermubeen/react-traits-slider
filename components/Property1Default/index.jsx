import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Property1Default.css";

function Property1Default(props) {
  const { x10101EverInExiste, withAlmostTwoMill } = props;

  useEffect(() => {
    loadTimelineData(x646TimelineData);
  }, []);

  return (
    <div className="x646 smart-layers-pointers component component-wrapper not-ready">
      <div className="frame-14-qYp2th">
        <img
          className="www-svgrepo-com-1-tVBamf"
          src="https://anima-uploads.s3.amazonaws.com/projects/6134c77d71a17ed2759e6e65/releases/613652be0e55840064d54bcb/img/www-svgrepo-com-1@2x.png"
        />
        <div className="x10101-ever-in-existe-tVBamf">{x10101EverInExiste}</div>
      </div>
      <div className="with-almost-two-mill-qYp2th">{withAlmostTwoMill}</div>
    </div>
  );
}

const x646TimelineData = [
  {
    initial_state_name: "Property-1=Default",
    root_element: ".x646",
    states_flow: {
      "Property-1=Default": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Variant2": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Variant3": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
    },
  },
];

export default Property1Default;
