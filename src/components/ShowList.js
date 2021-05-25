import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import ShowCards from "./ShowCards";
import ShowAddCard from "./ShowAddCard";
import ShowInput from "./ShowInput";
import { createCard } from "../stores/cardsSlice";
import { updateList } from "../stores/listsSlice";
const uniqid = require("uniqid");

function ShowList(props) {
  const { list } = props;
  const [addCardActive, setAddCardActive] = useState(false);
  const [updateListNameActive, setUpdateListNameActive] = useState(false);
  const dispatch = useDispatch();
  const cardSetLength = useSelector(
    (state) => state.cards.filter((card) => card.fk_listid === list._id).length
  );

  const onAddCardHandler = (newCardTitle) => {
    const newCard = {
      _id: uniqid(),
      description: "",
      fk_userid: 1,
      fk_listid: list._id,
      title: newCardTitle
    };

    dispatch(createCard(newCard));
    setAddCardActive(false);
  };

  const onAddCardCancelHandler = (event) => {
    setAddCardActive(false);
  };

  const updateListName = (listName) => {
    console.log("updateListName-listName-", listName);
    console.log("updateListName-list-", list);
    dispatch(
      updateList({
        ...list,
        name: listName
      })
    );
  };

  console.log("ShowList-list-", list);
  return (
    <div className="list">
      <header>
        <ShowInput inputValue={list.name} 
          setInputValue={updateListName} 
          inputActive={updateListNameActive} 
          setInputActive={setUpdateListNameActive}
          />
      </header>

      <ShowCards listId={list._id} />

      <footer>
        <div>
          {!addCardActive ? (
            <Button size="small" onClick={() => setAddCardActive(true)}>
              {cardSetLength === 0 ? "Add a card" : "Add another card"}
            </Button>
          ) : (
            <ShowAddCard
              onAddHandler={onAddCardHandler}
              onCancelHandler={onAddCardCancelHandler}
            />
          )}
        </div>
      </footer>
    </div>
  );
}

export default ShowList;
