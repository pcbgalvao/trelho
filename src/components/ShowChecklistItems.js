import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowChecklistItem from "./ShowChecklistItem";
import ShowAddChecklistItem from "./ShowAddChecklistItem";
import { Button } from "@material-ui/core";
import { createItem } from "../stores/checklistItemsSlice";

function ShowChecklistItems({ checklistId }) {
  const [addChecklistItemActive, setAddChecklistItemActive] = useState(false);
  const items = useSelector((state) =>
    state.checklistItems.filter((item) => item.fk_checklistid === checklistId)
  );
  const dispatch = useDispatch();

  const onAddChecklistItemHandler = (newChecklistItemName) => {
    const newItem = {
      name: newChecklistItemName,
      fk_checklistid: checklistId,
      value: false,
    };

    dispatch(createItem(newItem));
  };

  const onAddChecklistItemCancelHandler = (event) => {
    setAddChecklistItemActive(false);
  };

  //const updateCheckListValue =
  return (
    <>
      <div className="list">
        {items.map((checklistItem) => {
          return (
            <div key={checklistItem._id}>
              <ShowChecklistItem checklistItem={checklistItem} />
            </div>
          );
        })}
      </div>
      <div>
        {!addChecklistItemActive ? (
          <Button size="small" onClick={() => setAddChecklistItemActive(true)}>
            Add an Item
          </Button>
        ) : (
          <ShowAddChecklistItem
            onAddHandler={onAddChecklistItemHandler}
            onCancelHandler={onAddChecklistItemCancelHandler}
          />
        )}
      </div>
    </>
  );
}

export default ShowChecklistItems;
