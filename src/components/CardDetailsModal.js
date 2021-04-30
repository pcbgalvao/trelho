import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Container, Header, Card, Modal, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
const uniqid = require("uniqid");

import { selectLists } from "../store/boardsSlice";

const CardDetailsModal = (props) => {
  const { card } = props;
  const [open, setOpen] = useState(false);

  const ChecklistItems = ({ checklistItems }) => {
    return checklistItems.map((item) => {
      return (
        <div key={uniqid(item.name)}>
          {item.name}:{item.value}
        </div>
      );
    });
  };

  const ShowChecklist = ({ checklistLists }) => {
    const renderChecklistItems = checklistLists.map((checklist) => {
      return (
        <div key={uniqid(checklist.title)}>
          <div>
            <h3>{checklist.title}</h3>
          </div>
          <h2>Checklists</h2>
          <ChecklistItems checklistItems={checklist.items} />
        </div>
      );
    });

    return <div>{renderChecklistItems}</div>;
  };

  const ShowCardTitle = ({title}) => {
    return (<Card.Header>
      {title}
      </Card.Header>)
  };

  const ShowCard = ({ card }) => {
    return (
      <>
        <Card color="red" centered>
          <Card.Content header={card.title} />
          <Card.Content description={"Description: " + card.description} />
          <Card.Content extra>
            <ShowChecklist checklistLists={card.checklists} />
          </Card.Content>
        </Card>
        <Card color="red" centered>
          <Card.Content>
            <Card.Header>{card.title} </Card.Header>
            <Card.Meta>Description: {card.description} </Card.Meta>
            <Card.Description>
              <ShowChecklist checklistLists={card.checklists} />
            </Card.Description>
          </Card.Content>
        </Card>
      </>
    );
  };

  // <Card.Group items={renderChecklist(card.checklists)} />

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
      trigger={<Button>Card Details</Button>}
    >
      <Modal.Content>
        <ShowCard card={card} />
      </Modal.Content>
      <Modal.Actions></Modal.Actions>
    </Modal>
  );
};

export default CardDetailsModal;
