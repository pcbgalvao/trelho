import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import loginRestApi from "../restApi/loginRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = {
  _id: null,
  jwt: {},
  role: "",
  fullname: "",
  username: "",
  email: "",
  password: "",
};

const loginUser = createAsyncThunk("/login", async (userCredentials) => {
  console.log("store userCredentials-", userCredentials);
  const result = await loginRestApi.login(userCredentials);
  const { errorCode, accessToken, userDBCredentials } = result.data;
  if (errorCode === -1) {
    alert("Wrong credentials. Please try again");
    return { errorCode };
  }
  return { jwt: accessToken, ...userDBCredentials };
});

export const userLoggedInSlice = createSlice({
  name: "userLoggedIn",
  initialState: INITIAL_STATE,
  reducers: {
    logoutUser: (state, action) => {
      return INITIAL_STATE;
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

// ### Actions
//
export { loginUser };
export const { logoutUser } = userLoggedInSlice.actions;

export const selectIsUserLoggedIn = (state) => state.userLoggedIn._id !== null;
export const selectJwt = (state) => state.userLoggedIn.jwt;
export const selectRole = (state) => state.userLoggedIn.role;
export const selectFullname = (state) => state.userLoggedIn.fullname;
export const selectUsername = (state) => state.userLoggedIn.username;
export const selectEmail = (state) => state.userLoggedIn.email;
export const selectPassword = (state) => state.userLoggedIn.password;

// ### Reducers
//
export default userLoggedInSlice.reducer;
