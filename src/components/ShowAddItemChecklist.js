import React, { useRef, useState } from "react";
import { Icon, Button, Checkbox, Input } from "semantic-ui-react";
import { useClickAway } from "use-click-away";

const ShowAddItemChecklist = ({ createNewItem, setAddItemActive }) => {
  const [newItem, setNewItem] = useState("");

  const ref = useRef();
  useClickAway(ref, (event) => {
    onCancelHandler();
  });

  const onChangeNewItem = (event) => {
    setNewItem(event.target.value);
  };
  const onAddHandler = (event) => {
    if (newItem) {
      createNewItem(newItem);
    }
    setNewItem("");
  };

  const onCancelHandler = (event) => {
    setAddItemActive(false);
  };

  console.count("ShowNewItem");
  return (
    <>
      <span ref={ref}>
        <Input
          placeholder="Add a new Item"
          value={newItem}
          onChange={onChangeNewItem}
        />

        <Button onClick={onAddHandler}>Add</Button>
        <Button onClick={onCancelHandler}>
          <Icon name="cancel" />
        </Button>
      </span>
    </>
  );
}; // End ShowNewItem;

export default React.memo(ShowAddItemChecklist);
