import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowChecklistItem from "./ShowChecklistItem";
import ShowAddChecklistItem from "./ShowAddChecklistItem";
import { Button } from "@material-ui/core";
import { createChecklistItem } from "../stores/checklistsItemsSlice";
const uniqid = require("uniqid");

function ShowChecklistItems(props) {
  const { checklistId } = props;
  const [addChecklistItemActive, setAddChecklistItemActive] = useState(false);
  const dispatch = useDispatch();
  const checklistItemsSet = useSelector((state) =>
    state.checklistsItems.filter(
      (checklistItems) => checklistItems.fk_checklistid === checklistId
    )
  );
  console.log("ShowChecklistItems-checklistItemsSet-", checklistItemsSet);

  const onAddChecklistItemHandler = (newChecklistItemName) => {
    const newChecklistItem = {
      _id: uniqid(),
      name: newChecklistItemName,
      value: false,
      fk_userid: 1,
      fk_checklistid: checklistId
    };

    dispatch(createChecklistItem(newChecklistItem));
    //setAddChecklistItemActive(false);
  };

  const onAddChecklistItemCancelHandler = (event) => {
    setAddChecklistItemActive(false);
  };

  return (
    <>
      <div className="list">
        {checklistItemsSet.map((checklistItem) => {
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
