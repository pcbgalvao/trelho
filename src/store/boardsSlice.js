import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

import boardsRestApi from "../restApi/boardsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = [
  {
    _id: 1,
    fk_iduser: 1,
    name: "Todos",
  },
];

export const boardsSlice = createSlice({
  name: "boards",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {},
});

export const selectBoardName = (state) => {
  console.log("state-", state);
  return state.boards.boardname;
};
export const selectLists = (state) => state.boards;

// ### Reducers
//
export default boardsSlice.reducer;
