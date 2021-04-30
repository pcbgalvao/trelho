import React, { useEffect, useReducer, useState, useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useClickAway } from "use-click-away";
import { Input, Grid, Card, Header, Button, Icon } from "semantic-ui-react";
import ShowCardsList from "./ShowCardsList";
import { setListName, fetchLists } from "../store/listsSlice";

const uniqid = require("uniqid");

const ShowList = ({ list, setListName }) => {
  const [name, setName] = useState(list.name);

  const ref = useRef();
  useClickAway(ref, (event) => {
    if (list.name !== name) {
      setListName({ ...list, name: name });
    }
  });

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  console.count("ShowList");
  return (
    <div className="ui container">
      <Header>
        <b>
          <div ref={ref}>
            <Input transparent value={name} onChange={onChangeHandler} />
          </div>
        </b>
      </Header>
      <ShowCardsList listId={list._id} />
    </div>
  );
};

export default connect(null, {
  setListName,
})(ShowList);
