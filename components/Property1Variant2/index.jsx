import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Property1Variant2.css";

function Property1Variant2(props) {
  const { group, x10101EverInExiste, withAlmostTwoMill } = props;

  useEffect(() => {
    loadTimelineData(x643TimelineData);
  }, []);

  return (
    <div className="x643 smart-layers-pointers component component-wrapper not-ready">
      <div className="frame-14-y3efAG">
        <img className="group-rvkXvR" src={group} />
        <div className="x10101-ever-in-existe-rvkXvR">{x10101EverInExiste}</div>
      </div>
      <div className="with-almost-two-mill-y3efAG">{withAlmostTwoMill}</div>
    </div>
  );
}

const x643TimelineData = [
  {
    initial_state_name: "Property-1=Variant2",
    root_element: ".x643",
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
        overrides: {},
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

export default Property1Variant2;
