import React, { useEffect, useState, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { Segment, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import {
  createChecklist,
  updateChecklist,
  removeChecklist,
} from "../store/checklistsSlice";
import ShowChecklist from "./ShowChecklist";
import ShowAddChecklist from "./ShowAddChecklist";
import AddChecklistModalController from "./AddChecklistModalController";

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

const ShowChecklists = ({
  checklist,
  cardId,
  userId,
  selectedCardChecklists,
  createChecklist,
  updateChecklist,
  removeChecklist,
}) => {
  const [checklistSet, setChecklistsSet] = useState(selectedCardChecklists);
  const [addChecklistActive, setAddChecklistActive] = useState(false);

  useEffect(() => {
    setChecklistsSet(selectedCardChecklists);
  }, []);
  useEffect(() => {
    setChecklistsSet(selectedCardChecklists);
  }, [checklist]);

  useEffect(() => {
    //    createChecklist(checklists);
  }, [checklistSet]);

  const onDeleteChecklist = (checklistId) => {
    setChecklistsSet(
      _.reject(checklistSet, (checklist) => {
        return checklist._id === checklistId;
      })
    );
    removeChecklist(checklistId);
  };

  const onCancelAddChecklistHandler = (event) => {
    setAddChecklistActive(false);
  };

  const onAddChecklistHandler = (newChecklistTitle) => {
    const newChecklist = {
      _id: uniqid(),
      fk_cardid: cardId,
      title: newChecklistTitle,
      fk_userid: userId,
      items: [],
    };

    setChecklistsSet([...checklistSet, newChecklist]);
    setAddChecklistActive(false);
    createChecklist(newChecklist);
  };

  const onDragEnd = (result) => {
    // if item dropped outside the list
    if (!result.destination) {
      return;
    }

    setChecklistsSet(
      reorder(checklistSet, result.source.index, result.destination.index)
    );
  };

  console.log("ShowChecklists-checklistSet -", checklistSet);
  console.count("ShowChecklists");
  const renderedChecklist = checklistSet.map((checklist, idx) => {
    return (
      <Draggable
        key={`checklist-${checklist._id}`}
        draggableId={`checklist-${checklist._id}`}
        index={idx}
      >
        {(provided, snapshot) => (
          <div            
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ShowChecklist
              checklist={{ ...checklist }}
              updateChecklist={updateChecklist}
              onDeleteChecklist={onDeleteChecklist}
            />
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
            <segment
              floated
              className="checklistSet"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {renderedChecklist}
              {provided.placeholder}
            </segment>
          )}
        </Droppable>
      </DragDropContext>

      <AddChecklistModalController
        cardId={cardId}
        userId={userId}
        onCancelHandler={onCancelAddChecklistHandler}
        onAddHandler={onAddChecklistHandler}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    checklist: state.checklistsSlice,
    selectedCardChecklists: function selectedCardChecklists() {
      return state.checklistsSlice.filter((checklist) => {
        return checklist.fk_cardid === ownProps.cardId;
      });
    },
  };
};

export default connect(mapStateToProps, {
  removeChecklist,
  createChecklist,
  updateChecklist,
})(React.memo(ShowChecklists));
