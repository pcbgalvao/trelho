import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Modal } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import ShowAddChecklist from "./ShowAddChecklist";
import ShowChecklists from "./ShowChecklists";
import PopupComponent from "./PopupComponent";
import { ClickAwayListener } from "@material-ui/core";
import ShowInput from "./ShowInput";
import ShowInputIcon from "./ShowInputIcon";
import { IconButton } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import { createChecklist } from "../stores/checklistsSlice";
import { updateCard } from "../stores/cardsSlice";
const uniqid = require("uniqid");

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "no-wrap",
    vAlignContent: "top",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "0px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ShowModalCardDetails(props) {
  const { card } = props;
  const [addChecklistActive, setAddChecklistActive] = useState(false);
  const [editCardTitleActive, setEditCardTitleActive] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const listName = useSelector(
    (state) => state.lists.filter((list) => list._id === card.fk_listid)[0].name
  );

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render

  const handleOpenModal = (event) => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  const onAddChecklistHandler = (newChecklistTitle) => {
    const newChecklist = {
      _id: uniqid(),
      fk_cardid: card._id,
      title: newChecklistTitle,
      fk_userid: card.fk_userid,
      items: [],
    };

    dispatch(createChecklist(newChecklist));
    setAddChecklistActive(false);
  };

  const onAddChecklistCancelHandler = (event) => {
    event.preventDefault();
    setAddChecklistActive(false);
    event.stopPropagation();
  };

  const updateCardField = (updatedField) => ({
    updatedValue = event.target.value,
  }) => {
    dispatch(
      updateCard({
        ...card,
        [updatedField]: updatedValue,
      })
    );
  };

  const updateChecklistDescription = (newChecklistDescription) => {};

  const renderedContent = (
    <div className="list">
      <div style={modalStyle} className={classes.paper}>
        <h1 id="">
          <ShowInput
            inputValue={card.title}
            setInputValue={updateCardField("title")}
            inputActive={editCardTitleActive}
            setInputActive={setEditCardTitleActive}
          />
        </h1>
        <h4>in list {listName} </h4>
        <div className={classes.root}>
          <div>
            <h2>Description </h2>
            <TextField
              id="outlined-textarea"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={card.description}
              aria-label="maximum height"
              defaultValue="Enter a description"
              onChange={updateCardField("description")}
            />

            <ShowChecklists cardId={card._id} />
          </div>
          <div>
            <h4>ADD TO CARD</h4>
            <PopupComponent title="Checklist">
              <ShowAddChecklist
                onAddHandler={onAddChecklistHandler}
                onCancelHandler={onAddChecklistCancelHandler}
              />
            </PopupComponent>{" "}
          </div>
        </div>
      </div>
    </div>
  );

  console.log("showModalCardDetails-editCardTitleActive-", editCardTitleActive);
  console.log("showModalCardDetails-listName-", listName);
  return (
    <div>
      <div variant="contained">
        {editCardTitleActive ? (
          <ShowInput
            inputValue={card.title}
            setInputValue={updateCardField("title")}
            inputActive={editCardTitleActive}
            setInputActive={setEditCardTitleActive}
          />
        ) : (
          <div onClick={() => handleOpenModal()}>{card.title}</div>
        )}
      </div>
      <div variant="contained">
        <IconButton onClick={() => setEditCardTitleActive(true)}>
          <Edit />
        </IconButton>
      </div>

      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {renderedContent}
      </Modal>
    </div>
  );
}

export default ShowModalCardDetails;
