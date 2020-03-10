import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import "./operationBox.css";

import { StylesProvider } from "@material-ui/core";

class opBox extends Component {
  state = {
    result: "",
    resultExp: ""
  };

  // componentDidUpdate() {}
  handleInput = val => {
    this.setState({ result: this.state.result + val });
  };

  showResult = () => {
    const newResult = eval(this.state.result);
    console.log(newResult);
  };

  clearAll = () => {
    this.setState({
      result: "",
      resultExp: ""
    });
  };
  render() {
    return (
      <div>
        <StylesProvider injectFirst>
          <Paper square className="input">
            <div className="view1">{this.state.resultExp}</div>
            <div className="view2">{this.state.result}</div>
          </Paper>
          <Divider />
          <Paper elevation={5} square>
            <Grid container direction="row" justify="space-around">
              <Button variant="contained" onClick={() => this.handleInput(7)}>
                7
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(8)}>
                8
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(9)}>
                9
              </Button>
              <Button variant="contained" onClick={() => this.handleInput("/")}>
                /
              </Button>
            </Grid>
            <Divider />

            <Grid container direction="row" justify="space-around">
              <Button variant="contained" onClick={() => this.handleInput(4)}>
                4
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(5)}>
                5
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(6)}>
                6
              </Button>
              <Button variant="contained" onClick={() => this.handleInput("*")}>
                *
              </Button>
            </Grid>
            <Divider />

            <Grid container direction="row" justify="space-around">
              <Button variant="contained" onClick={() => this.handleInput(1)}>
                1
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(2)}>
                2
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(3)}>
                3
              </Button>
              <Button variant="contained" onClick={() => this.handleInput("-")}>
                -
              </Button>
            </Grid>
            <Divider />

            <Grid container direction="row" justify="space-around">
              <Button variant="contained" onClick={() => this.handleInput(0)}>
                0
              </Button>
              <Button variant="contained" onClick={() => this.handleInput(".")}>
                .
              </Button>
              <Button variant="contained" onClick={this.showResult()}>
                =
              </Button>
              <Button variant="contained" onClick={() => this.handleInput("+")}>
                +
              </Button>
            </Grid>
            <Divider />

            <Grid container direction="row" justify="center">
              <Button
                variant="outlined"
                fullWidth="true"
                onClick={this.clearAll}
              >
                CLEAR
              </Button>
            </Grid>
          </Paper>
        </StylesProvider>
      </div>
    );
  }
}

export default opBox;
