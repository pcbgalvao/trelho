import React, { useState } from "react";
import ShowList from "./ShowList";
import lists from "../stores/listsSlice";

function ShowLists(props) {
  const [listSet, setListSet] = useState(lists);
  return (
    <div className="lists">
      <ul>
        {listSet.map((list) => {
          return (
            <il key={list._id}>
              <ShowList list={list} />
            </il>
          );
        })}
      </ul>
    </div>
  );
}

export default ShowLists;
