import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/input";
import ClearButton from "./components/ClearButton";
import "./App.css";
import * as math from "mathjs";

class App extends Component {
  state = {
    input: "",
    resultExp: ""
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
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <div className="upperInput">{this.state.resultExp}</div>
          <Input value={this.state.input} />

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
        </div>
      </div>
    );
  }
}
export default App;
