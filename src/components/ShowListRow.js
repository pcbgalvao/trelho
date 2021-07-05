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

function ShowListRow({
  list,
  cardSetLength,
  renameListName,
  renameListNameActive,
  setRenameListNameActive,
  handleClick,
  handleClose,
  anchorEl
}) {
  console.count("ShowListRow");
  return (
    <>
      <Box display="flex" alignItems="center">
        <Box minWidth={260}>
          <ShowInput
            inputValue={list.name}
            setInputValue={renameListName}
            inputActive={renameListNameActive}
            setInputActive={setRenameListNameActive}            
          />
        </Box>

        <Box className="icon-buttons" width="100%" onClick={handleClick} mr={1}>
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
            <MenuItem onClick={() => onMenuAddCard(true)}>Add a Card</MenuItem>
          </Menu>
        </div>
      </Box>
    </>
  );
}

const pureComponent= React.memo(ShowListRow);
export default pureComponent;
