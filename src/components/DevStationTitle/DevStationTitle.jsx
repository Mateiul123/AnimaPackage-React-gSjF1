/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const DevStationTitle = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`dev-station-title property-1-1-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <p className="your-all-in-one-dev">
        <span className="span">Your all in one </span>
        <span className="text-wrapper-2">
          dev station ( )<br />
        </span>
        <span className="span">for your projects</span>
      </p>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

DevStationTitle.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
