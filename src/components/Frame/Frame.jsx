/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Frame = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="overlap-group">
        <div className={`rectangle ${state.property1}`} />
        <div className="rectangle-wrapper">
          <div className={`div property-1-${state.property1}`} />
        </div>
        <div className={`text-wrapper property-1-0-${state.property1}`}>Sign In</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "click":
        return {
          property1: "variant-3",
        };
    }
  }

  switch (action) {
    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Frame.propTypes = {
  property1: PropTypes.oneOf(["variant-3", "hover", "default"]),
};
