import React from "react";
import DrawerToggle from '../DrawerToggle/drawerToggle'
import "./menubar.css";

const menubar = props => {
  return (
    <div className="menu">
    <DrawerToggle drawerToggleClicked={props.drawerToggle}/>
      <div className="menuItems">
        <a href=" ">Calculator</a>
        <a href=" ">Unit converter</a>
        <a href=" ">Currency converter</a>
      </div>
    </div>
  );
};

export default menubar;
