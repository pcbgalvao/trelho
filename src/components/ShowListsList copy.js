import React, { useEffect, useReducer, useState, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { connect, useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Grid, Segment, Input, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import ShowAddList from "./ShowAddList";
import ShowList from "./ShowList";
import { createList } from "../store/listsSlice";

const uniqid = require("uniqid");
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 10;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "#77e2e0" : "#33c9c7",
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "#a1ffc5" : "#daffff",
  padding: grid,
  width: 250,
});

const ShowListsList = ({ listsList, createList }) => {
  const [listSet, setListSet] = useState(Object.values(listsList));
  const [addListActive, setAddListActive] = useState(false);
  const [listSetKeys, setListSetKeys] = useState([]);
  const [listItems, setListItems] = useState();

  useEffect(() => {
    setListSetKeys(Object.keys(listSet));
  }, [listSet]);

  const onAddListHandler = (newListTitle) => {
    const newList = {
      _id: uniqid(),
      fk_userid: 1,
      fk_boardid: 1,
      name: newListTitle,
    };

    createList(newList);
    setAddListActive(false);
    setListSet([...listSet, newList]);
  };

  const onAddListCancelHandler = (event) => {
    setAddListActive(false);
  };

  const onDragEnd = (result) => {
    // if item dropped outside the list
    if (!result.destination) {
      return;
    }

    setListSet(reorder(listSet, result.source.index, result.destination.index));
  };

  console.count("ShowListsList");

  const renderedLists = listSet.map((list, idx) => {
    return (
      <Draggable key={list._id} draggableId="`${list._id}`" index={idx}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ShowList list={list} />
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              className="listslist"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {renderedLists}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {!addListActive ? (
        <Button onClick={() => setAddListActive(true)}>Create List</Button>
      ) : (
        <ShowAddList
          onAddHandler={onAddListHandler}
          onCancelHandler={onAddListCancelHandler}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    listsList: state.lists,
  };
};

export default connect(mapStateToProps, { createList })(ShowListsList);
