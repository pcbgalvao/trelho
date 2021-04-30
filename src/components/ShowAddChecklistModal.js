import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import {
  TextArea,
  Segment,
  Grid,
  Header,
  Input,
  Button,
  Icon,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import { setCard } from "../store/cardsSlice";
import { updateChecklistItem } from "../store/checklistsSlice";
import ShowAddChecklist from "./ShowAddChecklist";

const uniqid = require("uniqid");

const ShowAddChecklistModal = ({ card, setCard, onUpdateCardModal }) => {
  const [cardDetails, setCardDetails] = useState(card);

  const onChangeCardPropHandler = (event, prop) => {
    const newCard = { ...cardDetails, [prop]: event.target.value };
    setCardDetails(newCard);
    onUpdateCardModal(newCard);
  };

  console.count("ShowAddChecklistModal");
  return (
    <Grid columns="equal">
      <Grid.Row>
        <Header>
          Add a Check List
        </Header>
      </Grid.Row>
      <Grid.Row columns="equal" stretched>
        <Grid.Column floated="left" width={6} key={1}>
          <Segment>
            <ShowAddChecklist />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default connect(null, {
  setCard,
})(ShowAddChecklistModal);
