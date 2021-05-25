import React, { useState } from "react";
import { Input, Button, IconButton, CancelIcon } from "@material-ui/core";
import useKeypress from "react-use-keypress";

const ShowAddCard = ({ onAddHandler, onCancelHandler }) => {
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
    if (input) {
      onAddHandler(input);
    }
  };

  console.count("ShowAddCard");
  return (
    <div>
      <Input
        placeholder="Enter a title for this Card..."
        value={input}
        onChange={onChangeInput}
        autoFocus
      />
      <Button onClick={onClickHandler}>Add</Button>
    </div>
  );
}; // End ShowAddCard

export default ShowAddCard;
