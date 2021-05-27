import React, { useState } from "react";
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
import ShowInput from "./ShowInput";
import PopupComponent from "./PopupComponent";
import { createCard } from "../stores/cardsSlice";
import { updateList } from "../stores/listsSlice";
const uniqid = require("uniqid");

function ShowList(props) {
  const { list } = props;
  const [addCardActive, setAddCardActive] = useState(false);
  const [menuListActive, setMenuListActive] = useState(false);

  const [updateListNameActive, setUpdateListNameActive] = useState(false);
  const dispatch = useDispatch();
  const cardSetLength = useSelector(
    (state) => state.cards.filter((card) => card.fk_listid === list._id).length
  );
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onAddCardHandler = (newCardTitle) => {
    const newCard = {
      _id: uniqid(),
      description: "",
      fk_userid: 1,
      fk_listid: list._id,
      title: newCardTitle,
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
        name: listName,
      })
    );
  };

  const onMenuAddCard = (value) => {
    handleClose();
    setAddCardActive(true);
  };

  console.log("ShowList-list-", list);
  return (
    <div className="list">
      <header>
        <Box display="flex" alignItems="center">
          <Box minWidth={260}>
            <ShowInput
              inputValue={list.name}
              setInputValue={updateListName}
              inputActive={updateListNameActive}
              setInputActive={setUpdateListNameActive}
            />
          </Box>

          <Box
            className="icon-buttons"
            width="100%"
            onClick={handleClick}
            mr={1}
          >
            ...
          </Box>

          <div className="menu-list">
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <div onClick={handleClose}>
                <div>List Actions</div>
                <div>x</div>
              </div>
              <Divider />
              <MenuItem onClick={() => onMenuAddCard(true)}>
                Add a Card
              </MenuItem>
            </Menu>
          </div>
        </Box>
      </header>

      <ShowCards listId={list._id} />

      <footer>
        <div>
          {!addCardActive ? (
            <Button size="small" onClick={() => setAddCardActive(true)}>
              {cardSetLength === 0 ? "Add a card" : "Add another card"}
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

export default ShowList;
