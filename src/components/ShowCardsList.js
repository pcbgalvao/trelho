import React, { useEffect, useReducer, useState, useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useClickAway } from "use-click-away";
import { Button } from "semantic-ui-react";
import ShowCard from "./ShowCard";
import ShowAddCard from "./ShowAddCard";
import { setCard } from "../store/cardsSlice";
import _ from "lodash";
const uniqid = require("uniqid");

const ShowCardsList = ({ listId, selectListCards, setCard }) => {
  let renderedCards = null;
  const [addListActivate, setAddListActivate] = useState();
  const [cardsList, setCardsList] = useState(selectListCards(listId));

  let numberOfCards = cardsList.length;
  useEffect(() => {
    //setCardsList(selectListCards(listId));
  }, []);

  const onAddCardtHandler = (newCardTitle) => {
    const newCard = {
      _id: uniqid(),
      description: "",
      fk_userid: 1,
      fk_listid: listId,
      title: newCardTitle,
    };
    setCard(newCard);
    setCardsList(_.unionBy([newCard], cardsList, "_id"));
    setAddListActivate(false);
  };

  const onAddCardCancelHandler = (event) => {
    setAddListActivate(false);
  };

  const onUpdateCardModal = (card) => {
    setCardsList(_.unionBy([card], cardsList, "_id"));
    setCard(card);
  };

  console.count("ShowCardList");
  renderedCards = _.sortBy(cardsList, "creationTimestamp").map((card) => {
    console.log("ShowLists => cardDetail-", card);
    return (
      <div key={card._id}>
        <ShowCard card={card} onUpdateCardModal={onUpdateCardModal} />
      </div>
    );
  });

  return (
    <div>
      {renderedCards}
      {!addListActivate ? (
        <Button onClick={() => setAddListActivate(true)}>
          {numberOfCards === 0 ? "Add a Card" : "Add another Cards"}
        </Button>
      ) : (
        <ShowAddCard
          onAddHandler={onAddCardtHandler}
          onCancelHandler={onAddCardCancelHandler}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  function selectListCards(listId) {
    return state.cards.filter((item) => item.fk_listid === listId);
  }

  return {
    selectListCards,
  };
};

export default connect(mapStateToProps, {
  setCard,
})(ShowCardsList);
