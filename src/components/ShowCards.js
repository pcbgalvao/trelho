import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../stores/cardsSlice";
import ShowModalCardDetails from "./ShowModalCardDetails";

function ShowCards({cardSet}) {  
  
  console.log("ShowCards-cardSet-", (cardSet));
  console.count("ShowCards");
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
