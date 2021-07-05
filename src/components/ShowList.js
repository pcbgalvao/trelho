import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Menu,
  MenuItem,
  ClickAwayListener,
  Divider,
  Box,
} from "@material-ui/core";
import ShowCards from "./ShowCards";
import ShowAddCard from "./ShowAddCard";
import ShowListRow from "./ShowListRow";
import PopupComponent from "./PopupComponent";
import { createCard, fetchCards } from "../stores/cardsSlice";
import { renameListName } from "../stores/listsSlice";

function ShowList(props) {
  const { list, cardSet } = props;
  const listCardSet=cardSet.filter(card=>card.fk_listid===list._id);
  const [addCardActive, setAddCardActive] = useState(false);
  const [menuListActive, setMenuListActive] = useState(false);

  const [renameListNameActive, setRenameListNameActive] = useState(false);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onAddCardHandler = (newCardTitle) => {
    const newCard = {
      description: "",
      fk_userid: "1",
      fk_listid: list._id,
      title: newCardTitle,
    };

    dispatch(createCard(newCard));
    setAddCardActive(false);
  };

  const onAddCardCancelHandler = (event) => {
    setAddCardActive(false);
  };

  const renameListName = (newListName) => {
    dispatch(renameListName(list._id, newListName));
  };

  const onMenuAddCard = (value) => {
    handleClose();
    setAddCardActive(true);
  };

  console.log("ShowList-list-", list);
  console.count("ShowList");

  if (_.isEmpty(list)) {
    return null;
  } else {
    return (
      <div className="list">
        <header>
          <ShowListRow
            list={list}
            cardSetLength={listCardSet.length}
            renameListName={renameListName}
            renameListNameActive={renameListNameActive}
            setRenameListNameActive={setRenameListNameActive}
            handleClick={handleClick}
            handleClose={handleClose}
            anchorEl={anchorEl}
          />
        </header>

        {listCardSet.length > 0 ? <ShowCards cardSet={listCardSet} /> : null}
        
        <footer>
          <div>
            {!addCardActive ? (
              <Button size="small" onClick={() => setAddCardActive(true)}>
                {cardSet.length === 0 ? "Add a card" : "Add another card"}
              </Button>
            ) : (
              <ClickAwayListener onClickAway={() => setAddCardActive(false)}>
                <ShowAddCard
                  onAddHandler={onAddCardHandler}
                  onCancelHandler={onAddCardCancelHandler}
                />
              </ClickAwayListener>
            )}
          </div>
        </footer>
      </div>
    );
  }
}

export default React.memo(ShowList);
