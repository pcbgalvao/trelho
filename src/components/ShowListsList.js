import React, { useEffect, useReducer, useState, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { connect, useSelector, useDispatch } from "react-redux";
import { Grid, Segment, Input, Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import ShowAddList from "./ShowAddList";
import ShowList from "./ShowList";
import { createList } from "../store/listsSlice";

const uniqid = require("uniqid");

const ShowListsList = ({ listsList, createList }) => {
  const [listSet, setListSet] = useState(listsList);
  const [addListActive, setAddListActive] = useState(false);

  const onAddListHandler = (newListTitle) => {
    const newList = {
      _id: uniqid(),
      fk_userid: 1,
      fk_boardid: 1,
      name: newListTitle,
    };

    createList(newList);
    setAddListActive(false);
    setListSet({ ...listSet, [newList._id]: newList });
  };

  const onAddListCancelHandler = (event) => {
    setAddListActive(false);
  };

  console.count("ShowListsList");
  let renderedLists = null;
  renderedLists = Object.keys(listSet).map((listId, idx) => {
    return (
      <Grid.Column key={idx}>
        <Segment>
          <ShowList list={listSet[listId]} />
        </Segment>
      </Grid.Column>
    );
  });

  return (
    <Grid columns={6}>
      {renderedLists}
      {!addListActive ? (
        <Button onClick={() => setAddListActive(true)}>Create List</Button>
      ) : (
        <ShowAddList
          onAddHandler={onAddListHandler}
          onCancelHandler={onAddListCancelHandler}
        />
      )}
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    listsList: state.lists,
  };
};

export default connect(mapStateToProps, { createList })(ShowListsList);
