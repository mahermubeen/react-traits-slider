import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./StateClosedSelectionSkin.css";

function StateClosedSelectionSkin(props) {
  const { text3, arrowDownSvgrepoCom1 } = props;

  useEffect(() => {
    loadTimelineData(x2982776TimelineData);
  }, []);

  return (
    <div className="x2982776 component component-wrapper not-ready">
      <div className="text-15-hxiiGb">{text3}</div>
      <img className="arrow-down-svgrepo-com-1-hxiiGb" src={arrowDownSvgrepoCom1} />
    </div>
  );
}

const x2982776TimelineData = [
  {
    initial_state_name: "State=Closed-Selection=Skin",
    root_element: ".x2982776",
    states_flow: {
      "State=Closed-Selection=Mouth": {
        listeners: [],
        overrides: {},
      },
      "State=Closed-Selection=Skin": {
        listeners: [],
        overrides: {},
      },
      "State=Opened-Selection=Mouth": {
        listeners: [],
        overrides: {},
      },
      "State=Opened-Selection=Skin": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default StateClosedSelectionSkin;
