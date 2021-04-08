import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import _ from "lodash";
import usersRestApi from "../restApi/usersRestApi";
import { USERS_URL_PATH } from "../constants";

 const createUser = createAsyncThunk(
  "/users/create/",
  async (userForm) => {      
    const response = usersRestApi.createUser(userForm);
    console.log("response-", response, config);

    return response;
  }
);

const listUsers = createAsyncThunk("/users/listUsers", async () => {  
  const response = await usersRestApi.listUsers()
  console.log("response-", response, config);

  return response;
});

const User = {
  init: function init(role = "user", fullname, username, email, password) {
    this.role = role;
    this.fullname = fullname;
    this.username = username;
    this.email = email;
    this.password = password;
  },
};

export const users = createSlice({
  name: "users",
  initialState: {
    userLogged: {},
    usersRegistered: [],
  },
  reducers: {},
  extraReducers: {
    [createUser.fulfilled]: (state, action) => {
      return { ...action.payload, ...state.userRegistered };
    },
    [listUsers.fulfilled]: (state, action) => {
      return [ ...action.payload ];
    },
  },
});

export const selectUserLogged = (state) => state.users.userLogged;
export const selectListRegistered = (state) => state.users.usersRegistered;

export default users.reducers;
export  {createUser, listUsers}