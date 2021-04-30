import React, { useEffect, useState, useRef } from "react";
import { Input, Button, Icon } from "semantic-ui-react";
import useKeypress from "react-use-keypress";

const ShowAddChecklist = ({ onAddHandler, onCancelHandler }) => {
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
    }
  });

  const onChangeNewChecklist = (event) => {
    const newValue = event.target.value;
    setInput(newValue);
  };

  const onClickButton = (event) => {
    onAddHandler(input);
  };

  const onCancelButton = (event) => {
    onCancelHandler();
  };

  console.count("ShowAddChecklist");
  return (
    <div>
      <Input
        placeholder="Add a new Checklist"
        value={input}
        onChange={onChangeNewChecklist}
      />
      <Button onClick={onClickButton}>Add</Button>
      <Button onClick={onCancelButton}>
        <Icon name="cancel" />
      </Button>
    </div>
  );
}; // End ShowAddChecklist;

const mapStatetoProps = (ownProps) => {
  return {
    selectChecklist: (ownProps) => {
      return state.checklists.filter((checklist) => {
        return (checklist.ck_cardid = ownProps);
      });
    },
  };
};

export default ShowAddChecklist;
