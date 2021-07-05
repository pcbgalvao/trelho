import React, { useState } from "react";
import useKeypress from "react-use-keypress";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { ClickAwayListener } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const _ = require("lodash");

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

function ShowInput({ inputValue, setInputValue, inputActive, setInputActive }) {
  const classes = useStyles();
  const [localInput, setLocalInput] = useState(inputValue);

  useKeypress(["Enter", "Escape"], (event) => {
    switch (event.key) {
      case "Escape":
        setLocalInput("");
        setInputActive(false);
        break;
      case "Enter":
        if (inputValue) {
          setInputValue(localInput);
          setInputActive(false);
        }
        break;
      default:
    }
  });

  const onChangeValue = (event) => {
    setLocalInput(event.target.value);
  };

  const onClick = (event) => {
    setInputActive(true);
  };

  const onCancel = () => {
    setInputActive(false);
  };

  return (
    <div className={classes.root} onClick={onClick}>
      {inputActive ? (
        <ClickAwayListener onClickAway={onCancel}>
          <TextField onChange={onChangeValue} value={localInput} autoFocus />
        </ClickAwayListener>
      ) : (
        <div variant="contained" onClick={onClick}>
          {inputValue}
        </div>
      )}
    </div>
  );
}

export default ShowInput;
