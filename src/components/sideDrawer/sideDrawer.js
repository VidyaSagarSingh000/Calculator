import React from "react";
import "./sideDrawer.css";
import Backdrop from "../backdrop/backdrop";

const sideDrawer = props => {
  const classes = ["sideDrawer", props.show ? "Open" : "Close"];
  console.log(classes.join(" "));
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={classes.join(" ")}>
        <div className="drawerDiv">
          <div className="drawerItems">
            <img
              src="https://purepng.com/public/uploads/medium/purepng.com-calculator-iconsymbolsiconsapple-iosiosios-8-iconsios-8-72152259601793czl.png"
              alt="img"
              height="20px"
            />
            <a href=" ">Calculator</a>
          </div>
          <div className="drawerItems">
            <img
              src="https://store-images.s-microsoft.com/image/apps.25239.14484240668598509.42f612f7-63e8-402f-a86b-061eb4c3d427.f0f0c431-d1a9-42c1-a208-35ee75a68663"
              alt="img"
              height="20px"
            />
            <a href=" ">Unit Conv</a>
          </div>

          <div className="drawerItems">
            <img
              src="https://cdn6.aptoide.com/imgs/2/6/6/266951d2199c718afd93e2e35cadef20_icon.png?w=240"
              alt="img"
              height="20px"
            />
            <a href=" ">Currency Conv</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
