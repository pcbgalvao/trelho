import React from "react";
import { useSelector, useDispatch } from "react-redux";

import UserRegister from "./UserRegister";

import {
  selectIsUserLoggedIn,
  selectFullname,
  selectLogin,
  selectEmail,
  selectPassword,
} from "../store/userLoggedInSlice";

const PlayGround = () => {
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);

  if (isUserLoggedIn)
    return (
      <div className="playground">
        <p>This is the PlayGround</p>
      </div>
    );

  return <UserRegister />;
};

export default PlayGround;
