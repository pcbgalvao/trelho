import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Icon, Grid, Modal, Input, Button } from "semantic-ui-react";
import {
  createChecklist,
  updateChecklist,
  removeChecklist,
} from "../store/checklistsSlice";

import { setCard, fetchCards } from "../store/cardsSlice";
//import { checklist } from "../store/selectedChecklistSlice";
import ShowAddChecklist from "./ShowAddChecklist";

const uniqid = require("uniqid");

const AddChecklistModalController = ({ cardId, userId, createChecklist }) => {
  const [openModal, setOpenModal] = useState(false);
  const [newChecklistTitle, setNewChecklistTitle] = useState("");

  const onCloseModal = (event, data) => {
    const newChecklist = {
      _id: uniqid(),
      fk_cardid: cardId,
      title: newChecklistTitle,
      fk_userid: userId,
      items: [],
    };
    setOpenModal(false);
    if (newChecklistTitle) {
      createChecklist(newChecklist);
      setNewChecklistTitle("");
    }
  };

  const onUnMountModal = (event) => {};

  console.count("AddChecklistModalController");
  return (
    <Grid.Column width={4}>
      <Modal
        closeIcon
        onClose={onCloseModal}
        onUnmount={onUnMountModal}
        onOpen={() => setOpenModal(true)}
        open={!!openModal}
        size="large"
        trigger={<Button>Add Check List</Button>}
      >
        <Modal.Header>
          {/* <Input transparent value={cardContent.title} /> */}
        </Modal.Header>
        <Modal.Content>
          <Input
            placeholder="Add a new Checklist"
            value={newChecklistTitle}
            onChange={(event) => setNewChecklistTitle(event.target.value)}
          />
        </Modal.Content>
        <Modal.Actions></Modal.Actions>
      </Modal>
    </Grid.Column>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};

export default connect(mapStateToProps, { createChecklist })(
  AddChecklistModalController
);
