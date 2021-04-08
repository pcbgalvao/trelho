import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import listsRestApi from "../restApi/listsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = [
  {
    _id: 1,
    fk_boardid: 1,
    fk_userid:1,
    listname: "House Things",
  },
    {
    _id: 2,
    fk_boardid: 1,
    fk_userid:1,

    listname: "List Supermarket",
  },
  {
    _id: 3,
    fk_boardid: 1,
    fk_userid:1,
    listname: "Turism Journey",
  },
];

const listsSlice = createSlice({
  name: "lists",
  initialState: INITIAL_STATE,
  reducers: {
    fetchLists(state, action) {
      return state;
    },
  },
  extraReducers: {},
});

export const { fetchLists } = listsSlice.actions;
export default listsSlice.reducer;
