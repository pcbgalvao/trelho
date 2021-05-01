import React, { useEffect, useReducer, useState, useRef } from "react";
import { useClickAway } from "use-click-away";
import _ from "lodash";
import { Input, Grid, Card, Header } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import ShowListsList from "./ShowListsList";

const uniqid = require("uniqid");

import LoginPage from "./LoginPage";
import CardModalController from "./CardModalController";

import { connect, useSelector, useDispatch } from "react-redux";
import { selectIsUserLoggedIn } from "../store/userLoggedInSlice";
import { setListName, fetchLists } from "../store/listsSlice";
import { setCardTitle, setCard, fetchCards } from "../store/cardsSlice";

const initialState = 0;
const reducerState = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "set":
      return action.count;
    default:
      throw new Error("Unexpected action");
  }
};

const Dashboard = () => {
  useEffect(() => {
    //fetchLists();
    //fetchCards();
  });
  // const [state, dispatch1] = useReducer(reducerState, initialState);

  let isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  //  const ShowCheckListtt = ({ checklistLists }) => {
  //    const renderChecklistItems = checklistLists.map((checklist) => {
  //      return (
  //        <div key={uniqid(checklist.title)}>
  //          <div>{checklist.title}</div>
  //          <CheckListItems checkListItems={checklist.items} />
  //        </div>
  //      );
  //    });
  //
  //    return (
  //      <div>
  //        {checklistLists.description}
  //        {renderChecklistItems}
  //      </div>
  //    );
  // };

  {
    /*

      <Card color="red" centered>
        <Card.Content>
          <Card.Header>{cardDetails.title} </Card.Header>
          <Card.Meta>Description: {cardDetails.description} </Card.Meta>
          <Card.Description>
            <h2>Checklists</h2>
            
          </Card.Description>
        </Card.Content>
      </Card>
        */
  }

  const ShowBoardName = () => {
    return <div>boardName: Todos</div>;
    //<div>boardName: {boardName}</div>;
  };

  //  <div className="ui card">
  //          <div className="content">
  //            <div className="ui header">{listItem.listname}</div>
  //          </div>
  //          <ShowListCards listId={list._id}
  //        </div>

  //if (isUserLoggedIn)
  return (
    <div className="Dashboard">
      <ShowBoardName />
      <ShowListsList />
    </div>
  );

  //  return (
  //      <LoginPage />
  //</div>
  //);
};

export default Dashboard;
