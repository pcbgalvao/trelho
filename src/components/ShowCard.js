import React, {useEffect} from "react";
import {useDispatch, useSelect} from 'react-reduz';
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
