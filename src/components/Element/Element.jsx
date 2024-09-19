/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Element = ({ className }) => {
  return (
    <div className={`element ${className}`}>
      <div className="overlap-group-2">
        <p className="get-your-projects">
          <span className="text-wrapper-3">
            Get your projects
            <br />
            done{" "}
          </span>
          <span className="text-wrapper-4">&lt;\</span>
          <span className="text-wrapper-3">&nbsp;</span>
        </p>
        <div className="faster-cheaper-wrapper">
          <div className="faster-cheaper">
            faster
            <br />
            cheaper
            <br />
            better
          </div>
        </div>
      </div>
    </div>
  );
};
