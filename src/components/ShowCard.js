import React from "react";
import ShowChecklists from "./ShowChecklists";

function ShowCard(props) {
  const { card } = props;
  return (
    <>
      
      <ShowChecklists cardId={card._id} />
    </>
  );
}

export default ShowCard;
