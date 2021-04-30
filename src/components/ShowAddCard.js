import React, { useEffect, useReducer, useState, useRef } from "react";
import { Button, Input, Icon } from "semantic-ui-react";
import { useClickAway } from "use-click-away";
import useKeypress from "react-use-keypress";

const ShowAddCard = ({ onAddHandler, onCancelHandler }) => {
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
    onAddHandler(input);
  };

  const onKeypressHandler = (event) => {
    if (event.key === "Enter") {
      onAddHandler(input);
    }
  };

  console.count("ShowAddCard");
  return (
    <div ref={ref}>
      <Input
        placeholder="Enter a title for this card..."
        value={input}
        onChange={onChangeInput}
        onKeyPress={onKeypressHandler}
      />
      <Button onClick={onClickHandler}>Add</Button>
      <Button onClick={onCancelHandler}>
        <Icon name="cancel" />
      </Button>
    </div>
  );
}; // End ShowAddCard

export default ShowAddCard;
