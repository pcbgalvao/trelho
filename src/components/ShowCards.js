import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ShowModalCardDetails from "./ShowModalCardDetails";

function ShowCards(props) {
  const listId = props.listId;
  const cardSet = useSelector((state) =>
    state.cards.filter((card) => card.fk_listid === listId)
  );

  return (
    <ul>
      {cardSet.map((card) => {
        return (
          <li key={card._id}>
            <ShowModalCardDetails card={card} />
          </li>
        );
      })}
    </ul>
  );
}

export default ShowCards;
