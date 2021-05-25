import React, { useState } from "react";
import useKeypress from "react-use-keypress";
import { TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: "25ch"
  }
}));

function ShowInputIcon({ inputValue, setInputValue }) {
  const classes = useStyles();
  const [inputActive, setInputActive] = useState(false);

  useKeypress(["Enter", "Escape"], (event) => {
    switch (event.key) {
      case "Escape":
        setInputActive(false);
        break;
      case "Enter":
        if (inputValue) {
          setInputValue(event.target.value);
        }
        break;
      default:
    }
  });

  const onChangeValue = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
    event.stopPropagation();
  };

  const onClick = (event) => {
    
    event.preventDefault();
    setInputActive(true);
  };

  const onCancel = () => {
    setInputActive(false);
  };

  return (
  <ClickAwayListener onClickAway={() => onCancel()}>
    <div className={classes.root}>
      {inputActive ? (
        <TextField onChange={onChangeValue} value={inputValue} autoFocus />
      ) : (
        <div variant="contained">
          {inputValue}
          <IconButton onClick={onClick}>
            <Edit />
          </IconButton>
        </div>
      )}
    </div>
    </ClickAwayListener>
  );
}

export default ShowInputIcon;
