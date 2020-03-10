import React from "react";
import Paper from "@material-ui/core/Paper";
import "./Button.css";
import { StylesProvider } from "@material-ui/core";

const Button = props => {
  const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };
  return (
    <StylesProvider injectFirst>
      <Paper
        outlined
        square
        className={`${isOperator(props.children) ? null : "operator"}`}
        onClick={() => props.handleClicked(props.children)}
      >
        {props.children}
      </Paper>
    </StylesProvider>
  );
};

export default Button;
