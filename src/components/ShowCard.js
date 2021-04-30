import React, { useEffect, useReducer, useState, useRef } from "react";
import { connect } from "react-redux";
import { useClickAway } from "use-click-away";
import CardModalController from "./CardModalController";
import { Input, Grid, Card, Header } from "semantic-ui-react";
import { setCard } from "../store/cardsSlice";

const ShowCard = ({ card, setCard, onUpdateCardModal }) => {
  const [cardDetails, setCardDetails] = useState(card);

  useEffect(() => {
    setCardDetails(card);
  }, [card]);

  const onChangeHandler = (event) => {
    onUpdateCardModal({ ...cardDetails, title: event.target.value });
  };

  console.count("ShowCard");
  return (
    <>
      <div>
        <Input
          focus
          transparent
          value={cardDetails.title}
          onChange={onChangeHandler}
        />
      </div>
      <CardModalController
        card={cardDetails}
        onUpdateCardModal={onUpdateCardModal}
      />
    </>
  );
};

export default connect(null, { setCard })(ShowCard);
