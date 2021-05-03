import React, { useEffect, useState, useRef } from "react";
import { Segment, Icon, Button, Checkbox, Input } from "semantic-ui-react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
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

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 10;

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#a1ffc5" : "#daffff",
  padding: grid,
  width: 350,
});

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

  const onDragEnd = (result) => {
    // if item dropped outside the list
    if (!result.destination) {
      return;
    }

    setItems(
      reorder(items, result.source.index, result.destination.index)
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

  const renderedItemsLists = items.map((item, idx) => {
    console.log("renderederItemsList-item-", item);
    return (
      <Draggable
        key={`checklist-${item._id}`}
        draggableId={`checklist-${item._id}`}
        index={idx}
      >
        {(provided, snapshot) => (
          <div className="item"          
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ShowItem
              item={item}
              onAddItemHandler={onAddItemHandler}
              onDeleteItemHandler={onDeleteItemHandler}
            />
          </div>
        )}
      </Draggable>
    );
  });

  console.count("ShowItemsChecklist");
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppableItems">
          {(provided, snapshot) => (
            <segment
              floated
              className="ItemsSet"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {renderedItemsLists}
              {provided.placeholder}
            </segment>
          )}
        </Droppable>
      </DragDropContext>

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
