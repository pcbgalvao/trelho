import React, { useState, useEffect } from "react";

import Checkbox from "@material-ui/core/Checkbox";

function ShowChecklistItem(props) {
  const [checklistItem, setChecklistItem] = useState(props.checklistItem);

  const handleChange = (event) => {
    setChecklistItem({ ...checklistItem, value: event.target.checked });
  };

  useEffect(() => {
    console.log("ShowChecklistItem-checklistItem-", checklistItem);
  }, [checklistItem]);

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
