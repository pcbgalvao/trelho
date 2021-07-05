import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, ClickAwayListener } from "@material-ui/core";
import ShowList from "./ShowList";
import ShowAddList from "./ShowAddList";
import ShowCards from "./ShowCards";
import { createList } from "../stores/listsSlice";
import { fetchCards } from "../stores/cardsSlice";
import { fetchLists } from "../stores/listsSlice";

function ShowLists({  }) {
  const [addListActive, setAddListActive] = useState(false);
  const listSet = useSelector((state) => Object.values(state.lists)                                                                                                                                     );
  const cardSet = useSelector((state) => Object.values(state.cards));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
    dispatch(fetchLists());  
  }, []);

  const onAddListHandler = (newListTitle) => {
    const newList = {
      fk_userid: "1",
      fk_boardid: "1",
      name: newListTitle,
    };

    dispatch(createList(newList));
    setAddListActive(false);
  };

  const onAddListCancelHandler = (event) => {
    console.log("onAddListCancelHandler");
    setAddListActive(false);
  };

  console.log("ShowLists-listSet", listSet);
  console.count("ShowLists");
  return (
    <div className="lists">
      {listSet.map((list) => {
        return (
          <div key={list._id}>
            <ShowList list={list} cardSet={cardSet} />
          </div>
        );
      })}      

      <ClickAwayListener onClickAway={onAddListCancelHandler}>
        <div>
          {!addListActive ? (
            <Button size="small" onClick={() => setAddListActive(true)}>
              {listSet.length === 0 ? "Add a List" : "Add another list"}
            </Button>
          ) : (
            <ShowAddList
              onAddHandler={onAddListHandler}
              onCancelHandler={onAddListCancelHandler}
            />
          )}
        </div>
      </ClickAwayListener>
    </div>
  );
}

export default React.memo(ShowLists);
