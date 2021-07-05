import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowChecklist from "./ShowChecklist";
import { fetchItems } from "../stores/checklistItemsSlice";

function ShowChecklists(props) {
  const { cardId } = props;

  const checklistsSet = useSelector((state) =>
    state.checklists.filter((checklist) => checklist.fk_cardid === cardId)
  );

  const dispatch = useDispatch();
  useEffect(() => {
    checklistsSet.map((checklist) => {
      const searchItems = {
        fk_userid: "1",
        fk_checklistid: checklist._id,
      };
      //dispatch(fetchItems(searchItems));
    });
    
  }, [checklistsSet]);

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
