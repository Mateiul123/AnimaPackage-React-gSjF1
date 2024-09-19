/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SectionN = ({ btnName = "section 1", className, divClassName }) => {
  return (
    <div className={`section-n ${className}`}>
      <div className={`section ${divClassName}`}>{btnName}</div>
    </div>
  );
};

SectionN.propTypes = {
  btnName: PropTypes.string,
};
