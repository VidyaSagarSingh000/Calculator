import React from "react";
import Paper from "@material-ui/core/Paper";
import './ClearButton.css'

const ClearButton = (props) => {
  return (
    <Paper outlined square className='button' onClick={props.clearAll}>
      CLEAR
    </Paper>
  );
};

export default ClearButton;
