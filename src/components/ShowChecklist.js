import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowInput from "./ShowInput";
import ShowChecklistItems from "./ShowChecklistItems";
import ShowTasksCompletedPercentage from "./ShowTasksCompletedPercentage";
import Button from "@material-ui/core/Button";
import { updateChecklist } from "../stores/checklistsSlice";
import { deleteChecklist } from "../stores/checklistsSlice";

function ShowChecklist({ checklistId }) {
  const checklist = useSelector(
    (state) =>
      state.checklists.filter((checklist) => checklist._id === checklistId)[0]
  );
  const tasksCompleted = useSelector((state) => {
    const items = state.checklistsItems.filter(
      (item) => item.fk_checklistid === checklistId
    );
    const numberTasksCompleted = items.filter((item) => item.value).length;
    const numberTasks = items.length;
    return numberTasks>0 ? ((numberTasksCompleted / numberTasks) * 100) : 0;
  });

  const [editChecklistTitleActive, setEditChecklistTitleActive] = useState(
    false
  );
  const dispatch = useDispatch();

  const updateChecklistTitle = (newChecklistTitle) => {
    const updatedChecklist = { ...checklist, title: newChecklistTitle };
    dispatch(updateChecklist(updatedChecklist));
  };

  const onDeleteChecklist = () => {
    dispatch(deleteChecklist(checklist._id));
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
        <ShowTasksCompletedPercentage value={tasksCompleted} showOnlyLabel={false} />
        <Button onClick={onDeleteChecklist}>Delete</Button>
      </h4>
      <ShowChecklistItems checklistId={checklist._id} />
    </div>
  );
}

export default ShowChecklist;
