import React, { useEffect, useReducer, useState, useRef } from "react";
import useKeypress from "react-use-keypress";
import { useClickAway } from "use-click-away";
import { Input, Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";

const ShowAddList = ({ onAddHandler, onCancelHandler }) => {
  const [input, setInput] = useState("");

  const ref = useRef();
  useClickAway(ref, (event) => {
    onCancelHandler();
  });

  useKeypress(["Enter", "Escape"], (event) => {
    switch (event.key) {
      case "Escape":
        onCancelHandler();
        break;
      case "Enter":
        if (!!input) {
          onAddHandler(input);
        }
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

  console.count("ShowAddList");
  return (
    <div ref={ref}>
      <Input
        placeholder="Enter a title for this List..."
        value={input}
        onChange={onChangeInput}
      />
      <Button onClick={onClickHandler}>Add</Button>
      <Button onClick={onCancelHandler}>
        <Icon name="cancel" />
      </Button>
    </div>
  );
}; // End ShowAddList

export default ShowAddList;
