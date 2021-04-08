import React, { useEffect, useState, useRef } from "react";
import { useInterval } from "react-use";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, MenuItem, Grid, Button } from "semantic-ui-react";

import { logoutUser, loginUser } from "../store/userLoggedInSlice";
import Login from "./LoginPage";

import {
  selectIsUserLoggedIn,
  selectFullname,
  selectUsername,
  selectEmail,
  selectPassword,
} from "../store/userLoggedInSlice";

const HeaderMenu = (props) => {
  const [valueTimeDate, setValueTimeDate] = useState(
    new Date().toLocaleString()
  );

  useInterval(() => setValueTimeDate(new Date().toLocaleString()), 60000);

  let isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  let fullName = useSelector(selectFullname);
  let username = useSelector(selectUsername);
  let email = useSelector(selectEmail);
  let password = useSelector(selectPassword);

  const handleItemClick = (event, { name }) => {    

    switch (name) {
      case "logout":
        props.logoutUser();
        break;
      case "login":
        props.loginUser();
        break;
    }
  };
  //
  const MenuLoggedIn = () => {
    return (
      <>
        <Menu.Item name="userfullname" onClick={handleItemClick}>
          Hi: {fullName}
        </Menu.Item>
        <Menu.Item name="logout" onClick={handleItemClick}>
          <Button as={Link} to="/logout">
            logout
          </Button>
        </Menu.Item>
      </>
    );
  };
  //
  const MenuLoggedOut = () => {
    return (
      <>
        <Menu.Item name="registeruser" onClick={handleItemClick}>
          <div as={Link} to="/userregister">
            User Registration
          </div>
        </Menu.Item>

        <div className="ui center floated">
          <div className="ui input">
            <input type="text" placeholder="username" />
          </div>
          <div className="ui input">
            <input type="text" placeholder="password" />
          </div>
        </div>

        <Menu.Item name="login" onClick={handleItemClick}>
          <div className="ui button">login</div>
        </Menu.Item>
      </>
    );
  };

  console.count("Menu");
  return (
    <Menu>
      <Grid.Column>
        <p>Trelho App</p>
        <p>{valueTimeDate}</p>
      </Grid.Column>

      {isUserLoggedIn ? <MenuLoggedIn /> : <MenuLoggedOut />}
    </Menu>
  );
};

export default connect(null, { logoutUser, loginUser })(HeaderMenu);
