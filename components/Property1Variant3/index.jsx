import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Property1Variant3.css";

function Property1Variant3(props) {
  const { group, address, text2 } = props;

  useEffect(() => {
    loadTimelineData(x640TimelineData);
  }, []);

  return (
    <div className="x640 smart-layers-pointers component component-wrapper not-ready">
      <div className="frame-14-Iz0VWy">
        <img className="group-8Vf5T5" src={group} />
        <div className="address-8Vf5T5">{address}</div>
      </div>
      <div className="text-14-Iz0VWy">{text2}</div>
    </div>
  );
}

const x640TimelineData = [
  {
    initial_state_name: "Property-1=Variant3",
    root_element: ".x640",
    states_flow: {
      "Property-1=Default": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
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
        overrides: {},
      },
    },
  },
];

export default Property1Variant3;
