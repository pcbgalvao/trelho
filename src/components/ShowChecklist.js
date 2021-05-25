import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowInput from "./ShowInput";
import ShowChecklistItems from "./ShowChecklistItems";
import { updateChecklist } from "../stores/checklistsSlice";

function ShowChecklist({ checklistId }) {
  const checklist = useSelector((state) =>
    state.checklists.filter((checklist) => checklist._id === checklistId)[0]
  );
  const [editChecklistTitleActive, setEditChecklistTitleActive] = useState(
    false
  );
  const dispatch = useDispatch();

  const updateChecklistTitle = (newChecklistTitle) => {
    const updatedChecklist = { ...checklist, title: newChecklistTitle };
    dispatch(updateChecklist(updatedChecklist));
  };

  return (
    <div>
      <h4>
        <ShowInput
          inputValue={checklist.title}
          setInputValue={updateChecklistTitle}
          inputActive={editChecklistTitleActive}
          setInputActive={setEditChecklistTitleActive}
        />
      </h4>
      <ShowChecklistItems checklistId={checklist._id} />
    </div>
  );
}

export default ShowChecklist;
