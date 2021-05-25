import React, { useState } from "react";
import { Input, Button, ClickAwayListener } from "@material-ui/core";
import useKeypress from "react-use-keypress";

const ShowAddChecklistItem = ({ onAddHandler, onCancelHandler }) => {
  const [input, setInput] = useState("");

  useKeypress(["Enter", "Escape"], (event) => {
    switch (event.key) {
      case "Escape":
        event.preventDefault();
        console.log("#$$$##$#$#Q$Q#$Q#$Q#$");
        onCancelHandler();
        event.stopPropagation();
        break;
      case "Enter":
        if (!!input) {
          event.preventDefault();
          onAddHandler(input);
          event.stopPropagation();
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

  console.count("ShowAddChecklistItem");
  return (
    <ClickAwayListener onClickAway={onCancelHandler}>
      <div>
        <Input
          placeholder="Enter an Item..."
          value={input}
          onChange={onChangeInput}
          autoFocus
        />
        <Button onClick={onClickHandler}>Add</Button>
        {/*
        <IconButton onClick={onCancelHandler} aria-label="cancel">
        <CancelIcon />
      </IconButton>
*/}
      </div>
    </ClickAwayListener>
  );
}; // End ShowAddList

export default ShowAddChecklistItem;
