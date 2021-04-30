import React, { Memo, useEffect, useState, useRef } from "react";
import { Icon, Button, Checkbox, Input } from "semantic-ui-react";

const ShowItem = ({ item, setItem, onAddItemHandler, onDeleteItemHandler }) => {
  const [value, setValue] = useState(item.value);
  
  const onChangeHandler = (event) => {
    setValue(!value);
    onAddItemHandler({ ...item, value: !value });
  };

  const onDeleteHandler = (event) => {
    onDeleteItemHandler({ ...item, value: !value });
  };

  // useClickAway(ref, (event) => {
  //    event.preventDefault();
  //    console.log("Clicked away of ShowItem");
  //    event.stopPropagation();
  //  });
  const iconName = (value) => {
    if (value) {
      return "check square outline";
    }
    return "square outline";
  };

  console.count("ShowItem");
  return (
    <>
      <div onClick={onChangeHandler}>
        <Icon name={iconName(value)} />
        {item.name}
      </div>
      <div onClick={onDeleteHandler}>
        <Icon name="delete" />
      </div>
    </>
  );
}; // End ShowItem

export default React.memo(ShowItem);
