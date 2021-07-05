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
import ShowInput from "./ShowInput";
import PopupComponent from "./PopupComponent";
import { createCard, fetchCards } from "../stores/cardsSlice";
import { renameListName } from "../stores/listsSlice";

function ShowList(props) {
  const { list } = props;
  const [addCardActive, setAddCardActive] = useState(false);
  const [menuListActive, setMenuListActive] = useState(false);

  const [renameListNameActive, setRenameListNameActive] = useState(false);
  const dispatch = useDispatch();

  /* useEffect(() => {
    console.count("Showlist-useEffect- Dispatch.fetchCards");
    const searchFields = {
      iduser: "1",
      fk_listid: list._id,
    };

  dispatch(fetchCards(searchFields));
  }, [list]);
*/
  const cardSet = useSelector((state) =>
    state.cards.filter((card) => card.fk_userid === "1")
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

  return (
    <div className="list">
      <header>
        <Box display="flex" alignItems="center">
          <Box minWidth={260}>
            <ShowInput
              inputValue={list.name}
              setInputValue={renameListName}
              inputActive={renameListNameActive}
              setInputActive={setRenameListNameActive}
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

{/*      {cardSet.length > 0 ? <ShowCards listId={list._id} /> : null}
*/}

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

export default React.memo(ShowList);
