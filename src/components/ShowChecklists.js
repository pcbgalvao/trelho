import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowChecklist from "./ShowChecklist";

function ShowChecklists(props) {
  const { cardId } = props;
  const checklistsSet = useSelector((state) =>
    state.checklists.filter((checklist) => checklist.fk_cardid === cardId)
  );

  console.log("ShowChecklists-checklistsSet-", checklistsSet);

  return (
    <>
      {checklistsSet.map((checklist) => {
        return (
          <div key={checklist._id}>
            <ShowChecklist checklistId={checklist._id} />
          </div>
        );
      })}
    </>
  );
}

export default ShowChecklists;
