import React, { useEffect, useState, useRef } from "react";
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

  console.log("ShowChecklists-checklistSet -", checklistSet);
  console.count("ShowChecklists");
  const renderedChecklist = _.sortBy(checklistSet, "creationtimestamp").map(
    (checklist) => {
      return (
        <div key={checklist._id}>
          <Segment tertiary>
            <ShowChecklist
              checklist={{ ...checklist }}
              updateChecklist={updateChecklist}
              onDeleteChecklist={onDeleteChecklist}
            />
          </Segment>
        </div>
      );
    }
  );

  return (
    <div>
      {renderedChecklist}
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
    }
  };
};

export default connect(mapStateToProps, {
  removeChecklist,
  createChecklist,
  updateChecklist,
})(React.memo(ShowChecklists));
