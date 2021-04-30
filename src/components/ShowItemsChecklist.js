import React, { useEffect, useState, useRef } from "react";
import { Segment, Icon, Button, Checkbox, Input } from "semantic-ui-react";
import { useDispatch } from "react-redux";
//import { useClickAway } from "use-click-away";
import { useClickAway } from "react-use";
import { connect } from "react-redux";

import ShowItem from "./ShowItem";
import ShowAddItemChecklist from "./ShowAddItemChecklist";

import "semantic-ui-css/semantic.css";
import {
  setCardChecklist,
  updateChecklistItem,
} from "../store/checklistsSlice";
import _ from "lodash";

const uniqid = require("uniqid");

const ShowItemsChecklist = ({ itemsList, setItemsList }) => {
  //const dispatch = useDispatch;
  console.log("ShowItemsChecklist-itemsList-", itemsList);
  const [addItemActive, setAddItemActive] = useState(null);
  const [items = itemsList, setItems] = useState();

  useEffect(() => {
    setItemsList(items);
  }, [items]);

  const onClickAddItemActive = (event) => {
    setAddItemActive(true);
  };

  const onAddItemHandler = (item) => {
    setItems(_.unionBy([item], items, "_id"));
  };

  const onDeleteItemHandler = (item) => {
    setItems(
      _.reject(items, (i1) => {
        return i1._id === item._id;
      })
    );
  };

  const updatCheckListItems = (item) => {
    //updateCheckList(item);

    const newItemsList = items.map((itemRec) => {
      if (itemRec._id === item._id) {
        return item;
      } else {
        return itemRec;
      }
    });
    SetItemsList(newItemsList);
    //result = dispatch({ type: "counter/setCardCheckList", payload: checkList });
  };

  const createNewItem = (newItem) => {
    setItemsList([
      ...items,
      {
        _id: uniqid("cl-item"),
        name: newItem,
        value: false,
      },
    ]);
  };

  const renderedItemsLists = _.sortBy(items, "_id").map((item) => {
    console.log("renderederItemsList-item-", item);
    return (
      <div key={item._id}>
        <Segment tertiary>
          <ShowItem
            item={item}
            onAddItemHandler={onAddItemHandler}
            onDeleteItemHandler={onDeleteItemHandler}
          />
        </Segment>
      </div>
    );
  });

  console.count("ShowItemsChecklist");
  return (
    <div>
      {renderedItemsLists}
      {!addItemActive ? (
        <Button onClick={setAddItemActive(true)}>Add a new Item</Button>
      ) : (
        <ShowAddItemChecklist
          createNewItem={createNewItem}
          setAddItemActive={setAddItemActive}
        />
      )}
    </div>
  );
};

export default React.memo(ShowItemsChecklist);
