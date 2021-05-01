import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import listsRestApi from "../restApi/listsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = {
  1: {
    _id:'7f89m3sko6agty9',
    fk_boardid: 1,
    fk_userid: 1,
    name: "House Things",
  },

  //2: {
  //    _id: 2,
  //fk_boardid: 1,
  //fk_userid: 1,
  //name: "List Supermarket",
  //},

  //3: {
  //    _id: 3,
  //fk_boardid: 1,
  //fk_serid: 1,
  //name: "Turism Journey",
  //},
};

const listsSlice = createSlice({
  name: "lists",
  initialState: INITIAL_STATE,
  reducers: {
    fetchLists(state, action) {
      return state;
    },
    createList(state, action) {
      return { ...state, [action.payload._id]: action.payload };
    },
    setListName(state, action) {
      return { ...state, [action.payload._id]: action.payload };
    },
  },
  extraReducers: {},
});

export const { fetchLists, setListName, createList } = listsSlice.actions;
export default listsSlice.reducer;
