/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { SectionN } from "../SectionN";
import "./style.css";

export const BtnSection = ({ property1, className, sectionNBtnName = "section 1", sectionNDivClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`btn-section ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`section-btn property-1-3-${state.property1}`}>
        <SectionN
          btnName={sectionNBtnName}
          className={`${state.property1 === "default" && "class"}`}
          divClassName={sectionNDivClassName}
        />
      </div>
      <div className={`section-btn-line property-1-4-${state.property1}`} />
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

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

BtnSection.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  sectionNBtnName: PropTypes.string,
};
