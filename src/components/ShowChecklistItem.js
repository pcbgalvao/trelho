import React, { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
//import { updateChecklistItem } from "../stores/checklistsItemsSlice";

function ShowChecklistItem(props) {
  const { checklistItem } = props;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    //dispatch(
    //  updateChecklistItem({ ...checklistItem, value: event.target.checked })
    //);
  };

  return (
    <>
      <Checkbox
        checked={checklistItem.value}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      {checklistItem.name}
    </>
  );
}

export default ShowChecklistItem;
