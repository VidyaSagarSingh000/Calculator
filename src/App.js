import React, { Component } from "react";
import "./App.css";
import Button from "./components/button/Button";
import Input from "./components/input/input";
import ClearButton from "./components/clearButton/ClearButton";
import SideDrawer from "./components/sideDrawer/sideDrawer";
import MenuBar from "./components/menubar/menubar";
import "./App.css";
import * as math from "mathjs";

class App extends Component {
  state = {
    input: "",
    resultExp: "",
    show: false
  };

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  clearInput = () => {
    this.setState({ input: "", resultExp: "" });
  };

  evaluateResult = () => {
    this.setState({
      resultExp: this.state.input,
      input: math.evaluate(this.state.input).toFixed(2)
    });
  };
  SideDrawerToggle = () => {
    this.setState(prevState => {
      return { show: !prevState.show };
    });
  };
  closeSideDrawer = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="app">
        <SideDrawer show={this.state.show} closed={this.closeSideDrawer} />

        <MenuBar drawerToggle={this.SideDrawerToggle} />
        {/* <div className="calc-wrapper"> */}
        <div className="row1">
          <div className="upperInput">{this.state.resultExp}</div>
          <Input value={this.state.input} />
        </div>

        <div className="row">
          <Button handleClicked={this.addToInput}>7</Button>
          <Button handleClicked={this.addToInput}>8</Button>
          <Button handleClicked={this.addToInput}>9</Button>
          <Button handleClicked={this.addToInput}>/</Button>
        </div>
        <div className="row">
          <Button handleClicked={this.addToInput}>4</Button>
          <Button handleClicked={this.addToInput}>5</Button>
          <Button handleClicked={this.addToInput}>6</Button>
          <Button handleClicked={this.addToInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClicked={this.addToInput}>1</Button>
          <Button handleClicked={this.addToInput}>2</Button>
          <Button handleClicked={this.addToInput}>3</Button>
          <Button handleClicked={this.addToInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClicked={this.addToInput}>0</Button>
          <Button handleClicked={this.addToInput}>.</Button>
          <Button handleClicked={() => this.evaluateResult()}>=</Button>
          <Button handleClicked={this.addToInput}>+</Button>
        </div>
        <div className="row">
          <ClearButton clearAll={this.clearInput} />
        </div>
        {/* </div> */}
      </div>
    );
  }
}
export default App;
