import React from "react";
import "./drawerToggle.css";

const drawerToggle = props => {
  return (
    <div className="hamburger" onClick={props.drawerToggleClicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggle;
