import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

//import cardsRestApi from "../restApi/cardsRestApi";
import CONSTANTS from "../constants";
import { CommentActions } from "semantic-ui-react";

const INITIAL_STATE = {
    _id: 1,
    fk_boardid: 1,
    fk_userid:1,
    name: "House Things",
  };

const selectedListSlice = createSlice({
  name: "selectedList",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedList(state, action) {
      return action.payload;
    },
    setSelectedListName: (state, action) => {
      return {... state, title :action.payload};
    },
  },
});

export const {
    setSelectedList,
    setSelectedListName,
} = selectedListSlice.actions;
export default selectedListSlice.reducer;
