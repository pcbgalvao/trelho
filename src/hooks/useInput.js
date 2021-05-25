import React, { useState } from "react";
import { Input, Button, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import useKeypress from "react-use-keypress";

const ShowAddList = ({ placeholder, onAddHandler, onCancelHandler }) => {
  const [input, setInput] = useState("");

  useKeypress(["Enter", "Escape"], (event) => {
    switch (event.key) {
      case "Escape":
        onCancelHandler();
        break;
      case "Enter":
        if (!!input) {
          onAddHandler(input);
        }
        break;
      default:
    }
  });

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const onClickHandler = () => {
    if (!!input) {
      onAddHandler(input);
    }
  };

  console.count("UseInput");
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={input}
        onChange={onChangeInput}
        autoFocus
      />
      <Button onClick={onClickHandler}>Add</Button>

      <IconButton onClick={onCancelHandler} aria-label="cancel">
        <CancelIcon />
      </IconButton>
    </div>
  );
}; // End ShowAddList

export default ShowAddList;
