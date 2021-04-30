import React, { Memo, useEffect, useState, useRef } from "react";
import { useClickAway } from "use-click-away";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.css";
import ShowItemsChecklist from "./ShowItemsChecklist";
import { Input, Icon } from "semantic-ui-react";
import _ from "lodash";

const uniqid = require("uniqid");

const ShowChecklist = ({ checklist, onDeleteChecklist, updateChecklist }) => {
  const [checklistTitle, setChecklistTitle] = useState(checklist.title);
  const [itemsList, setItemsList] = useState(checklist.items);

  const ref = useRef();
  //useClickAway(ref, (event) => {
  //    console.log("Clicked away from ShowChecklist");
  //  });

  useEffect(() => {
    let newChecklist = {
      ...checklist,
      title: checklistTitle,
      items: itemsList,
    };

    if (!_.isEqual(newChecklist, checklist)) {
      updateChecklist(newChecklist);
    }
  }, [itemsList, checklistTitle]);

  const onChangeTitle = (event) => {
    setChecklistTitle(event.target.value);
  };

  const onDeleteHandler = (event) => {
    onDeleteChecklist(checklist._id);
  };

  console.count("ShowChecklist");
  return (
    <div ref={ref}>
      <div>
        <Input
          transparent
          value={checklistTitle}
          onChange={onChangeTitle}
        />
        <div onClick={onDeleteHandler}>
          <Icon name="delete" />
        </div>
      </div>
      <ShowItemsChecklist itemsList={itemsList} setItemsList={setItemsList} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedCardChecklists: function selectedCardChecklists(ownProps) {
      return state.checklistsSlice.filter(
        (checklist) => checklist.fk_cardid == cardId
      );
    },
  };
};

export default React.memo(ShowChecklist);
